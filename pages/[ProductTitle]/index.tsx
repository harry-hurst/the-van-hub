// react
import { useState, useEffect, useContext, SetStateAction } from "react";
import { ShopifyContext } from "../../context/ShopifyContextComponent";

// styles
import productPageStyles from "./ProductPage.module.css";

// components
import BreadCrumbs from "../../components/Reusable/BreadCrumbs";
import Spinner from "../../components/Reusable/Spinner";

// next components
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { ProductTitle, productId } = router.query;

  const [product, setProduct] = useState<any>();
  const [thumbnailIndex, setThumbnailIndex] = useState<number>(0);

  const { client, addToBasket } = useContext(ShopifyContext);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  async function fetchProduct() {
    client.product
      .fetch(productId)
      .then((retrievedProduct: SetStateAction<undefined>) => {
        // Do something with the product
        setProduct(retrievedProduct);
      });
  }

  return (
    <div className="container" id={productPageStyles.container}>
      <BreadCrumbs productTitle={ProductTitle} />

      {product ? (
        <>
          <div className="row p-2">
            <span id={productPageStyles.productTitle}>{product.title}</span>
          </div>

          <div className="row">
            <div
              className="col-sm-12 col-md-10 col-lg-7 p-2"
              id={productPageStyles.firstColumn}
            >
              <div id={productPageStyles.mainImageContainer}>
                <Image
                  src={product.images[thumbnailIndex].src}
                  layout="fill"
                  objectFit="scale-down"
                  alt="Product image"
                />
              </div>
            </div>

            <div
              className="col-sm-12 col-md-2 col-lg-1 p-2"
              id={productPageStyles.secondColumn}
            >
              {product.images.map((image: any, index: number) => (
                <div
                  key={index}
                  className={
                    thumbnailIndex === index
                      ? `${productPageStyles.thumbnailImageContainer} ${productPageStyles.selectedThumbnail}`
                      : productPageStyles.thumbnailImageContainer
                  }
                  onClick={() => {
                    setThumbnailIndex(index);
                  }}
                >
                  <div
                    style={{
                      margin: "5%",
                      paddingTop: "80%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={image.src}
                      layout="fill"
                      quality={5}
                      objectFit="scale-down"
                      alt="Product thumbnail"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-12 col-lg-4 p-2">
              <span>{product.description}</span>
            </div>
          </div>

          <div id={productPageStyles.callToActionContainer}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addToBasket(product.variants[0].id);
              }}
              style={{ color: "white" }}
            >
              Add to Basket
            </button>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
