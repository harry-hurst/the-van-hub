import transporterStyles from "./Transporter.module.css";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

export default function Transporter(props: { slideIndex: number }) {
  return (
    <AnimatePresence>
      {props.slideIndex === 0 && (
        <motion.div
          id={transporterStyles.transporterContainer}
          exit={{ x: 1500 }}
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
        >
          <div id={transporterStyles.carouselContainer}>
            <Image
              src="/images/transporter.png"
              layout="fill"
              quality={10}
              alt=""
            />

            <div
              className={transporterStyles.imageContainer}
              style={{ width: "5%", height: "15%", left: "66.5%", top: "25%" }}
            >
              <Image src="/images/ip22.png" layout="fill" quality={10} alt="" />
            </div>
            <div
              className={transporterStyles.imageContainer}
              style={{
                width: "6%",
                height: "10%",
                left: "58.8%",
                top: "24.2%",
              }}
            >
              <Image
                src="/images/solar_controller_graphic.png"
                layout="fill"
                quality={10}
                alt=""
              />
            </div>
            <div
              className={transporterStyles.imageContainer}
              style={{
                width: "6.85%",
                height: "12%",
                left: "59.7%",
                top: "63.6%",
              }}
            >
              <Image
                src="/images/battery_graphic.png"
                layout="fill"
                quality={10}
                alt=""
              />
            </div>
            <div
              className={transporterStyles.imageContainer}
              style={{ width: "54%", height: "2%", left: "9.5%", top: "-1.7%" }}
            >
              <Image
                src="/images/solar_panel.png"
                layout="fill"
                quality={10}
                alt=""
              />
            </div>
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
                quality={10}
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
                quality={10}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
