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
      <div className={sliderItemStyles.sliderItem}>
        <Link
          href={`/shop/all-batteries/${product.handle}?productId=${product.id}`}
        >
          <div className={sliderItemStyles.imageContainer}>
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
          <div className={sliderItemStyles.descriptionContainer}>
            <div className={sliderItemStyles.title}>{product.title}</div>
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
