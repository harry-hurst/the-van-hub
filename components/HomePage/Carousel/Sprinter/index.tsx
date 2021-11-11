import sprinterStyles from "./Sprinter.module.css";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

export default function Sprinter(props: { slideIndex: number }) {
  return (
    <AnimatePresence>
      {props.slideIndex === 1 && (
        <motion.div
          id={sprinterStyles.sprinterContainer}
          exit={{ x: -1500 }}
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
        >
          <div id={sprinterStyles.carouselContainer}>
            <Image
              src="/images/sprinter.png"
              layout="fill"
              quality={10}
              priority
              alt=""
            />

            <div
              className={sprinterStyles.imageContainer}
              style={{
                width: "7%",
                height: "10.5%",
                left: "52.85%",
                top: "71.5%",
              }}
            >
              <Image
                src="/images/battery_graphic.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
            </div>

            <div
              className={sprinterStyles.imageContainer}
              style={{
                width: "7%",
                height: "10.5%",
                left: "61.9%",
                top: "71.5%",
              }}
            >
              <Image
                src="/images/battery_graphic.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
            </div>

            <div
              className={sprinterStyles.imageContainer}
              style={{
                width: "8%",
                height: "7.05%",
                left: "40.45%",
                top: "28.4%",
              }}
            >
              <Image
                src="/images/inverter_graphic.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
              <div
                id={sprinterStyles.plugContainer}
                style={{
                  width: "9%",
                  height: "44%",
                  left: "0",
                  top: "50.9%",
                }}
              >
                <Image
                  src="/images/plug.png"
                  layout="fill"
                  quality={10}
                  priority
                  alt=""
                />
              </div>
            </div>

            <div
              className={sprinterStyles.wheelContainer}
              style={{
                height: "31.7%",
                width: "14.8%",
                left: "16%",
                top: "72%",
              }}
            >
              <Image
                src="/images/sprinter-wheel.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
            </div>
            <div
              className={sprinterStyles.wheelContainer}
              style={{
                height: "31.7%",
                width: "14.8%",
                left: "78.7%",
                top: "72%",
              }}
            >
              <Image
                src="/images/sprinter-wheel-2.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
            </div>

            <div
              className={sprinterStyles.imageContainer}
              style={{
                width: "4.3%",
                height: "11%",
                left: "58.5%",
                top: "35.6%",
              }}
            >
              <Image
                src="/images/b_to_b_charger.png"
                layout="fill"
                quality={10}
                priority
                alt=""
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
