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
      <div id={sliderItemStyles.sliderItem}>
        <Link
          href={`/shop/all-batteries/${product.handle}?productId=${product.id}`}
        >
          <div id={sliderItemStyles.imageContainer}>
            <Image
              src={product.images[0].src}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </Link>
        <Link
          href={`/shop/all-batteries/${product.handle}?productId=${product.id}`}
        >



          <div id={sliderItemStyles.descriptionContainer}>

            <span id={sliderItemStyles.title} style={{ marginBottom: "10px" }} >{product.title}</span>

            {product.availableForSale ? (
              <div
                id={sliderItemStyles.inStock}
                className={sliderItemStyles.stock}
              >
                In Stock
              </div>
            ) : (
              <div
                id={sliderItemStyles.noStock}
                className={sliderItemStyles.stock}
              >
                Out of Stock
              </div>
            )}

          </div>



        </Link>
      </div>
    );
  } else return null;
}
