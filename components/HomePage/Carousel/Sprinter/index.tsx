// styles
import sprinterStyles from "./Sprinter.module.css";

// next components
import Image from "next/image";
import Link from "next/link";

// modules
import { motion, AnimatePresence } from "framer-motion";
const container = {
  hidden: { x: "100vw" },
  visible: { x: 0 },
  transitionEnd: {
    display: "block",
  },
};

export default function Sprinter(props: { slideIndex: number }) {
  return (
    <AnimatePresence>
      {props.slideIndex === 1 && (
        <motion.div
          id={sprinterStyles.sprinterContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={container}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div id={sprinterStyles.carouselContainer}>
            <Image
              src="/images/sprinter.png"
              layout="fill"
              quality={20}
              priority={true}
              alt=""
            />
            <Link href="/Select/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "7%",
                  height: "10.5%",
                  left: "52.85%",
                  top: "71.5%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/battery_graphic.png"
                  layout="fill"
                  quality={20}
                  priority
                  alt=""
                />
              </motion.div>
            </Link>
            <Link href="/Select/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "7%",
                  height: "10.5%",
                  left: "61.9%",
                  top: "71.5%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/battery_graphic.png"
                  layout="fill"
                  quality={20}
                  priority
                  alt=""
                />
              </motion.div>
            </Link>

            <Link href="/Select/SYGG-1500%201500W%20Pure%20Sine%20Wave%20Inverter?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczMDUwNzc5MTE=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "8%",
                  height: "7.05%",
                  left: "40.45%",
                  top: "28.4%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/inverter_graphic.png"
                  layout="fill"
                  quality={20}
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
                    quality={20}
                    priority
                    alt=""
                  />
                </div>
              </motion.div>
            </Link>

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
                quality={20}
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
                quality={20}
                priority
                alt=""
              />
            </div>

            <Link href="/Select/Pro%20Batt%20Ultra%20Battery%20to%20Battery%20Charger?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NTQ3MTkyMTU3Njc=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "4.3%",
                  height: "11%",
                  left: "58.5%",
                  top: "35.6%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/b_to_b_charger.png"
                  layout="fill"
                  quality={20}
                  priority
                  alt=""
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
