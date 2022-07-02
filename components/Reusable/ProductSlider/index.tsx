import sliderStyles from "./Slider.module.css";

import { useState, useEffect, useContext } from "react";

import { ShopifyContext } from "../../../context/Shopify";
import { ScreenSizeContext } from "../../../context/ScreenSize";

import SliderItem from "./SliderItem";

import { motion, AnimatePresence } from "framer-motion";
import { scaleUp } from "../../../framer_motion/variants/general/scaleUp";

const ProductSlider = () => {
  const { client } = useContext(ShopifyContext);
  const { windowSize } = useContext(ScreenSizeContext);

  // collection id for slider items:
  const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI4MzgzMjUxNjc1OQ==";

  const [sliderProducts, setSliderProducts] = useState<any[]>([]);

  const [position, setPosition] = useState<number>(0);

  // componentDidMount()
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await client.collection.fetchWithProducts(collectionId, {
        productsFirst: 10,
      });

      setSliderProducts(result.products);
    };

    fetchProducts().catch(console.error);
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
              `${sliderStyles.mobile1}`
            }
            ${
              windowSize === "mobile" &&
              position === 2 &&
              `${sliderStyles.mobile2}`
            }
            ${
              windowSize === "mobile" &&
              position === 3 &&
              `${sliderStyles.mobile3}`
            }
            ${
              windowSize === "mobile" &&
              position === 4 &&
              `${sliderStyles.mobile4}`
            }
            ${
              windowSize === "mobile" &&
              position === 5 &&
              `${sliderStyles.mobile5}`
            }
            ${
              windowSize === "mobile" &&
              position === 6 &&
              `${sliderStyles.mobile6}`
            }
            ${
              windowSize === "mobile" &&
              position === 7 &&
              `${sliderStyles.mobile7}`
            }
            ${
              windowSize === "mobile" &&
              position === 8 &&
              `${sliderStyles.mobile8}`
            }
            ${
              windowSize === "mobile" &&
              position === 9 &&
              `${sliderStyles.mobile9}`
            }
            
            ${
              windowSize === "tablet" &&
              position === 1 &&
              `${sliderStyles.tablet1}`
            }
            ${
              windowSize === "tablet" &&
              position === 2 &&
              `${sliderStyles.tablet2}`
            }
            ${
              windowSize === "tablet" &&
              position === 3 &&
              `${sliderStyles.tablet3}`
            }

            ${
              windowSize === "laptop" &&
              position === 1 &&
              `${sliderStyles.laptop1}`
            }
            ${
              windowSize === "laptop" &&
              position === 2 &&
              `${sliderStyles.laptop2}`
            }

            ${
              windowSize === "desktop" &&
              position === 1 &&
              `${sliderStyles.desktop1}`
            }


            `}
          >
            {sliderProducts.map(
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
            (windowSize === "laptop" && position !== 2) ||
            (windowSize == "desktop" && position !== 1)) && (
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
};

export default ProductSlider;
