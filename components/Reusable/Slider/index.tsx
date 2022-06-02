// styles
import sliderStyles from "./Slider.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// context
import { ShopifyContext } from "../../../context/Shopify";

// components
import SliderItem from "./SliderItem";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { scaleUp } from "../../../framer_motion/variants/general/scaleUp";

export default function Slider() {
  // context
  const { client } = useContext(ShopifyContext);
  const { windowSize } = useContext(ScreenSizeContext);

  // custom js
  const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI4MzgzMjUxNjc1OQ==";

  // react
  const [sliderProducts, setSliderProducts] = useState<undefined | any[]>(
    undefined
  );

  const [position, setPosition] = useState<number>(0);

  // componentDidMount()
  useEffect(() => {
    // async method:
    client.collection
      .fetchWithProducts(collectionId, { productsFirst: 10 })
      .then((collection: any) => {
        setSliderProducts(collection.products);
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
              windowSize === "mobile" &&
              position === 1 &&
              `${sliderStyles.tiny1}`
            }
            ${
              windowSize === "mobile" &&
              position === 2 &&
              `${sliderStyles.tiny2}`
            }
            ${
              windowSize === "mobile" &&
              position === 3 &&
              `${sliderStyles.tiny3}`
            }
            ${
              windowSize === "mobile" &&
              position === 4 &&
              `${sliderStyles.tiny4}`
            }
            ${
              windowSize === "mobile" &&
              position === 5 &&
              `${sliderStyles.tiny5}`
            }
            ${
              windowSize === "mobile" &&
              position === 6 &&
              `${sliderStyles.tiny6}`
            }
            ${
              windowSize === "mobile" &&
              position === 7 &&
              `${sliderStyles.tiny7}`
            }
            ${
              windowSize === "mobile" &&
              position === 8 &&
              `${sliderStyles.tiny8}`
            }
            ${
              windowSize === "mobile" &&
              position === 9 &&
              `${sliderStyles.tiny9}`
            }
            
            ${
              windowSize === "laptop" &&
              position === 1 &&
              `${sliderStyles.large1}`
            }
            `}
          >
            {sliderProducts !== undefined &&
              sliderProducts.map(
                (product: {
                  handle: string;
                  id: string;
                  title: string;
                  images: any[];
                  variants: any[];
                  availableForSale: boolean;
                }) => (
                  <SliderItem
                    key={product.id}
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
              className={`${sliderStyles.arrow} btn btn-info rounded p-3`}
              style={{ left: "-20px" }}
              onClick={() => {
                arrowClick("left");
              }}
            >
              <i className="bi bi-chevron-left"></i>
            </motion.button>
          )}

          {((windowSize == "mobile" && position !== 9) ||
            (windowSize === "tablet" && position !== 3) ||
            (windowSize === "laptop" && position !== 1)) && (
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
              className={`${sliderStyles.arrow} btn btn-info rounded p-3`}
              style={{ right: "-20px" }}
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
