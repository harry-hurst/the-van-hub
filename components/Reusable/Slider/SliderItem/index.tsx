// styles
import sliderItemStyles from "./SliderItem.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// next components
import Link from "next/link";
import Image from "next/image";

export default function SliderItem(props: { productId: string }) {
  const { client } = useContext(ShopifyContext);

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    client.product.fetch(props.productId).then((product: any) => {
      // Do something with the product
      setProduct(product);
    });
  }, []);

  if (product) {
    return (
      <div className="border-end p-3">
        <Link
          href={`/shop/all-batteries/${product.handle}?productId=${product.id}`}
        >
          <a>
            <div id={sliderItemStyles.imageContainer} className="mb-2">
              <Image
                src={product.images[0].src}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          </a>
        </Link>
        <Link
          href={`/shop/all-batteries/${product.handle}?productId=${product.id}`}
        >
          <a>
            <div id={sliderItemStyles.descriptionContainer}>
              <span id={sliderItemStyles.title} className="mb-2">
                {product.title}
              </span>

              {product.availableForSale ? (
                <span id={sliderItemStyles.inStock} className="text-success">
                  <i className="bi bi-check2-circle"> </i>
                  in stock
                </span>
              ) : (
                <span id={sliderItemStyles.noStock} className="text-danger">
                  <i className="bi bi-x-circle"> </i>
                  out of stock
                </span>
              )}
            </div>
          </a>
        </Link>
      </div>
    );
  } else return null;
}
