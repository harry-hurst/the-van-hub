// styles
import transporterStyles from "./Transporter.module.css";

// next components
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
const container = { hidden: { x: "-100vw" }, visible: { x: 0 } };

export default function Transporter(props: { slideIndex: number }) {
  return (
    <AnimatePresence>
      {props.slideIndex === 0 && (
        <motion.div
          id={transporterStyles.transporterContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={container}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div id={transporterStyles.carouselContainer}>
            <Image
              src="/images/transporter.png"
              layout="fill"
              objectFit="contain"
              quality={20}
              priority
              alt=""
            />
              <motion.div
                className={transporterStyles.imageContainer}
                style={{
                  width: "5%",
                  height: "15%",
                  left: "66.5%",
                  top: "25%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/ip22.png"
                  layout="fill"
                  objectFit="contain"
                  quality={20}
                  alt=""
                />
              </motion.div>
          

            <Link href="/SmartSolar%20MPPT%20Solar%20Charge%20Controller?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDgwNTcwMjI2MTU=">
              <motion.div
                className={transporterStyles.imageContainer}
                style={{
                  width: "6%",
                  height: "10%",
                  left: "58.8%",
                  top: "24.2%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/solar_controller_graphic.png"
                  layout="fill"
                  objectFit="contain"
                  quality={20}
                  alt=""
                />
              </motion.div>
            </Link>

            <Link href="/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
              <motion.div
                className={transporterStyles.imageContainer}
                style={{
                  width: "6.85%",
                  height: "12%",
                  left: "59.7%",
                  top: "63.6%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/battery_graphic.png"
                  layout="fill"
                  objectFit="contain"
                  quality={20}
                  alt=""
                />
              </motion.div>
            </Link>

            <Link href="/200W%20Monocrystalline%20Rigid%20Framed%20Solar%20Panel?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwOTM0ODU0MzcwNzk=">
              <motion.div
                className={transporterStyles.imageContainer}
                style={{
                  width: "54%",
                  height: "2%",
                  left: "9.5%",
                  top: "-1.7%",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/solar_panel.png"
                  layout="fill"
                  objectFit="contain"
                  quality={20}
                  alt=""
                />
              </motion.div>
            </Link>

            <div
              className={transporterStyles.wheelContainer}
              style={{
                width: "14.5%",
                height: "34.3%",
                left: "12.8%",
                top: "68%",
              }}
            >
              <Image
                src="/images/transporter-wheel.png"
                layout="fill"
                objectFit="contain"
                quality={20}
                alt=""
              />
            </div>
            <div
              className={transporterStyles.wheelContainer}
              style={{
                width: "14.5%",
                height: "34.3%",
                left: "75.5%",
                top: "68%",
              }}
            >
              <Image
                src="/images/transporter-wheel-2.png"
                layout="fill"
                objectFit="contain"
                quality={20}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
