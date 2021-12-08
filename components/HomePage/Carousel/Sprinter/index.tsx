// styles
import sprinterStyles from "./Sprinter.module.css";

// next components
import Image from "next/image";
import Link from "next/link";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { container } from "../../../../framer_motion/variants/carousel/sprinter";

export default function Sprinter(props: { slideIndex: number }) {
  return (
    <AnimatePresence>
      {props.slideIndex === 1 && (
        <motion.div
          id={sprinterStyles.container}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={container}
        >
          <div id={sprinterStyles.inner}>
            <Image
              src="/images/sprinter.png"
              layout="fill"
              objectFit="contain"
              quality={50}
              alt=""
            />
            <Link href="/Select/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "7%",
                  height: "10.8%",
                  left: "52.3%",
                  top: "71.5%",
                }}
                whileHover={{ scale: 1.4 }}
              >
                <Image
                  src="/images/battery_graphic.png"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
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
                  height: "10.8%",
                  left: "60.35%",
                  top: "71.5%",
                }}
                whileHover={{ scale: 1.4 }}
              >
                <Image
                  src="/images/battery_graphic.png"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
                  priority
                  alt=""
                />
              </motion.div>
            </Link>

            <Link href="/Select/SYGG-1500%201500W%20Pure%20Sine%20Wave%20Inverter?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczMDUwNzc5MTE=">
              <motion.div
                className={sprinterStyles.imageContainer}
                style={{
                  width: "7.6%",
                  height: "7.05%",
                  left: "41.2%",
                  top: "28.4%",
                }}
                whileHover={{ scale: 1.4 }}
              >
                <Image
                  src="/images/inverter_graphic.png"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
                  priority
                  alt=""
                />
                <div
                  id={sprinterStyles.plugContainer}
                  style={{
                    width: "9%",
                    height: "44%",
                    left: "2%",
                    top: "50.9%",
                  }}
                >
                  <Image
                    src="/images/plug.png"
                    layout="fill"
                    objectFit="contain"
                    quality={50}
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
                left: "18.4%",
                top: "72%",
              }}
            >
              <Image
                src="/images/sprinter-wheel.png"
                layout="fill"
                objectFit="contain"
                quality={50}
                priority
                alt=""
              />
            </div>
            <div
              className={sprinterStyles.wheelContainer}
              style={{
                height: "31.7%",
                width: "14.8%",
                left: "75.2%",
                top: "72%",
              }}
            >
              <Image
                src="/images/sprinter-wheel-2.png"
                layout="fill"
                objectFit="contain"
                quality={50}
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
                  left: "57.5%",
                  top: "35.6%",
                }}
                whileHover={{ scale: 1.4 }}
              >
                <Image
                  src="/images/b_to_b_charger.png"
                  layout="fill"
                  objectFit="contain"
                  quality={50}
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
