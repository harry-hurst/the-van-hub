// styles
import sliderStyles from "./Slider.module.css";

// context
import { ShopifyContext } from "../../../context/Shopify";

// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// components
import SliderItem from "./SliderItem";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { scaleUp } from "../../../framer_motion/variants/general/scaleUp";

export default function Slider() {
  const { client } = useContext(ShopifyContext);
  const { windowSize } = useContext(ScreenSizeContext);

  const [collection, setCollection] = useState<any>();
  const [position, setPosition] = useState<number>(0);

  const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI4MzgzMjUxNjc1OQ==";

  // fetch collection from shopify:
  useEffect(() => {
    client.collection
      .fetchWithProducts(collectionId, { productsFirst: 10 })
      .then((collection: any) => {
        // Do something with the collection
        setCollection(collection);
      });
  }, []);

  function arrowClick(arrow: string) {
    if (arrow === "left") {
      setPosition(position - 1);
    } else if (arrow === "right") {
      setPosition(position + 1);
    }
  }

  return (
    <div id={sliderStyles.container}>
      <div className="container" id={sliderStyles.inner}>
        <div className="border rounded" id={sliderStyles.slider}>
          <div
            id={sliderStyles.sliderInner}
            className={`
            ${
              windowSize !== "extraLarge" &&
              position === 1 &&
              `${sliderStyles.pos1Large}`
            }
            ${
              windowSize !== "extraLarge" &&
              position === 2 &&
              `${sliderStyles.pos2Large}`
            }
            ${
              windowSize === "extraLarge" &&
              position === 1 &&
              `${sliderStyles.pos1ExtraLarge}`
            }
            `}
          >
            {collection &&
              collection.products.map(
                (product: {
                  handle: string;
                  id: string;
                  title: string;
                  images: any;
                  variants: any;
                  availableForSale: boolean;
                }) => (
                  <SliderItem
                    handle={product.handle}
                    id={product.id}
                    title={product.title}
                    imgSrc={product.images[0].src}
                    price={product.variants[0].price}
                    availableForSale={product.availableForSale}
                  />
                )
              )}
          </div>
        </div>

        <AnimatePresence>
          {position !== 0 && (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              type="button"
              className={`${sliderStyles.arrow} btn btn-dark rounded p-3`}
              style={{ left: "0" }}
              onClick={() => {
                arrowClick("left");
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </motion.button>
          )}

          {((windowSize !== "extraLarge" && position !== 2) ||
            (windowSize === "extraLarge" && position !== 1)) && (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              type="button"
              className={`${sliderStyles.arrow} btn btn-dark rounded p-3`}
              style={{ right: "0" }}
              onClick={() => {
                arrowClick("right");
              }}
            >
              <i className="bi bi-chevron-right"></i>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
