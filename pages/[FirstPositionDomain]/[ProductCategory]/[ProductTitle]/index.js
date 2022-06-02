// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// styles
import productPageStyles from "./ProductPage.module.css";

// components
import BreadCrumbs from "../../../../components/Reusable/BreadCrumbs";
import Spinner from "../../../../components/Reusable/Spinner";

// next components
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { ProductCategory, ProductTitle, productId } = router.query;

  const [product, setProduct] = useState();
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const { client, addToBasket } = useContext(ShopifyContext);

  // componentDidUpdate()
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  async function fetchProduct() {
    client.product.fetch(productId).then((retrievedProduct) => {
      // Do something with the product
      setProduct(retrievedProduct);
    });
  }

  return (
    <div className="container" id={productPageStyles.container}>
      <BreadCrumbs
        productCategory={ProductCategory}
        productTitle={ProductTitle}
      />
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
              {product.images.map((image, index) => (
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

            <div
              className="col-md-12 col-lg-4 p-2"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>

          <div id={productPageStyles.callToActionContainer}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addToBasket(product.variants[0].id);
              }}
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
