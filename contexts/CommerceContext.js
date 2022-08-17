import { useRouter } from "next/dist/client/router";
import { createContext, useEffect, useState } from "react";
import { commerce } from "../lib/commerce";

const CommerceContext = createContext();

const CommerceProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    setProducts(products);
  };

  const fetchProduct = async (productID) => {
    const { data: products } = await commerce.products
      .retrieve(productID)
      .then((product) => {
        return product;
      });
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quant, price) => {
    const item = await commerce.cart.add(productId, quant);
    setCart(item.cart);
    console.log(cart);
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "addToCart",
        ecommerce: {
          add: {
            products: [{ id: productId, quantity: quant, price: price }],
          },
          currencyCode: "EUR",
        },
      });
    }
  };

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item.cart);
  };

  const generateCheckoutToken = async (cart_id) => {
    try {
      const token = await commerce.checkout.generateToken(cart_id, {
        type: "cart",
      });
      setCheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const captureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout
        .capture(checkoutTokenId, newOrder)
        .then((resp) => {
          console.log(resp);
          if (resp.transactions[0].payment_source.method_name === "PayPal") {
            completePayment(resp.transactions[0].id, resp.id);
          }
          console.log(cart, resp);
          if (window.dataLayer) {
            let boughtItems = [];
            for (var i = 0; i < resp.order.line_items.length; i++) {
              let item = resp.order.line_items[i];
              boughtItems.push({
                id: item.id,
                name: item.product_name,
                price: item.price.raw,
                //brand: "Converse",
                //category: "Men/Clothing/T-Shirts",
                //variant: "red",
                position: i,
                quantity: item.quantity,
              });
            }
            window.dataLayer.push({
              event: "EEtransaction",
              ecommerce: {
                purchase: {
                  actionField: {
                    id: resp.transactions[0].id, //transaction ID - mandatory
                    affiliation: "Online Store",
                    revenue: resp.order_value.formatted, //total including tax and shipping
                    tax: (resp.order_value.formatted * 0.19).toFixed(2),
                    //shipping: 5,
                    //coupon: "CANO25", //if a coupon code was used for this order
                  },
                  products: boughtItems,
                },
              },
            });
            console.log("DataLayer was pushed!");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      const newCart = await commerce.cart.refresh();
      setCart(newCart);
      //location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const completePayment = async (transaction_id, order_id) => {
    fetch("/api/completeOrder", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transaction_id: transaction_id,
        order_id: order_id,
      }),
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <CommerceContext.Provider
      value={{
        products,
        setProducts,
        fetchProduct,
        cart,
        setCart,
        checkoutToken,
        setCheckoutToken,
        handleAddToCart,
        handleRemoveFromCart,
        generateCheckoutToken,
        captureCheckout,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export { CommerceProvider, CommerceContext };
