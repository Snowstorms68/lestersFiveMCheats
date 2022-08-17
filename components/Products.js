import dynamic from "next/dynamic";
import { useContext } from "react";
const Product = dynamic(() => import("./Product/Product"));
import { CommerceContext } from "../contexts/CommerceContext";

export default function Products({ data }) {
  const { handleAddToCart } = useContext(CommerceContext);
  const { products, setProducts } = useContext(CommerceContext);
  console.log(products);
  return (
    <>
      <main>
        {products && products.length && (
          <div className="main-padding main-padding-vertical flex flex-row flex-wrap items-center justify-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex w-full md:w-1/2 xl:w-1/3 c2:w-1/4"
              >
                <Product
                  product={product}
                  handleAddToCart={() =>
                    handleAddToCart(product.id, 1, product.price.formatted)
                  }
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
