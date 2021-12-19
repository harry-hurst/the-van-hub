// styles
import sliderStyles from "./Slider.module.css";

// react
import { useState, useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// components
import SliderItem from "./SliderItem";

// svg
import RightArrow from "../../../assets/svg/RightArrow";
import LeftArrow from "../../../assets/svg/LeftArrow";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { scaleUp } from "../../../framer_motion/variants/general/scaleUp";

export default function Slider() {
  const { windowSize } = useContext(ScreenSizeContext);

  const [position, setPosition] = useState<number>(0);

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
        <div id={sliderStyles.slider}>
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
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NjUxNzMwODYzNTk=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzQ1MTYxNjA2NjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcxNzI2NjI0MjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcxNzI2NjI0MjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzQ1MTYxNjA2NjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcxNzI2NjI0MjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzcxNzI2NjI0MjM=" />
            <SliderItem productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NjUxNzMwODYzNTk=" />
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
              className={`${sliderStyles.arrow} btn btn-secondary`}
              style={{ left: "0" }}
              onClick={() => {
                arrowClick("left");
              }}
            >
              <LeftArrow width="20" height="20" strokeWidth="0px" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
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
              className={`${sliderStyles.arrow} btn btn-secondary`}
              style={{ right: "0" }}
              onClick={() => {
                arrowClick("right");
              }}
            >
              <RightArrow width="20" height="20" strokeWidth="0px" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
