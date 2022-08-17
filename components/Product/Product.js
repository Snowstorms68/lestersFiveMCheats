import Link from "next/link";
import Image from "next/image";
import noImage from "../../assets/no_image.png";
import CallToAction from "../Elements/CallToAction";
export default function Product({ product, handleAddToCart }) {
  const ProductDetailPage = ({ product }) => {

    return (
      // Add head tag
      <div className="product-detail">
        <img className="product-detail__image" src={product.media.source} alt={product.name} />
        <div className="product-detail__info">
          <Link href="/">
            <a className="product-detail__back">
              <ArrowLeft className="product__icon" width={42} height={42} />
              <p>Back to products</p>
            </a>
          </Link>
          <div className="product-detail__details">
            <h1 className="product-detail__name">{product.name}</h1>
            <div
              className="product-detail__description"
              dangerouslySetInnerHTML={{__html: product.description}}
            ></div>
            <div className="product-detail__price">
              {product.price.formatted_with_symbol}
            </div>
          </div>
        </div>
        <button
          name="View item"
          className="product-detail__btn"
        >
        <span>Add to cart</span>
        <ArrowRight className="product__icon" width={48} height={48} />
      </button>
    </div> 
    )
  }
  console.log(product);
  return (
    <div className="w-full m-4 p-5 shadow-lg font-main-regular mt-32 w-screen xl:h-screen c2:h-auto ">
      <div className="imageContainer flex justify-center w-full mx-auto relative mb-5">
        <Image
          src={!product.has.images ? noImage : product.image.url}
          alt="media_references"
          layout="fill"
          className="image_"
          priority
        />
      </div>
      <div className=" flex flex-row justify-between">
        <div>
          <p
            className="flow-text"
            /*dangerouslySetInnerHTML={{ __html: product.name }}*/
          >
            {product.name}           
          </p>              
          <p className="flow-text">
            {"Preis: " + product.price.formatted_with_code}
          </p>
        </div>
      </div>
      <Link href={"/product/" + product.id}>
        <CallToAction text="Details" additionalCSS={"mb-2 mt-5"} />
      </Link>
      <div onClick={handleAddToCart}>
        <CallToAction
          text="Warenkorb"
          additionalCSS={"text-center"}
        />
      </div>
    </div>
  );
}


