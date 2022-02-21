// styles
import transporterStyles from "./Transporter.module.css";

// react
import { useEffect, useState } from "react";

// next components
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  // van structure
  animateVan,
  transitionVan,

  // wheels
  animateWheelL,
  animateWheelR,
  transitionWheelL,
  transitionWheelR,

  // items in van
  animateItem,
  transitionItem1,
  transitionItem2,
  transitionItem3,
  transitionItem4,
} from "../../../../../../framer_motion/wheels/transition";

export default function Transporter(props) {
  const [displacement, setDisplacement] = useState("100vw");

  useEffect(() => {
    if (props.slideIndex === 0) {
      setDisplacement("100vw");
    } else if (props.slideIndex === 1) {
      setDisplacement("0");
    }
  }, [props.slideIndex]);

  return (
    <motion.div
      animate={{ x: displacement }}
      transition={{ duration: 0.4, type: "spring", damping: 15 }}
      id={transporterStyles.container}
    >
      <motion.div
        animate={animateVan}
        transition={transitionVan}
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <Image
          src="/images/transporter.png"
          layout="fill"
          objectFit="contain"
          quality={50}
          alt=""
        />

        <Link href="/shop/200W%20Monocrystalline%20Rigid%20Framed%20Solar%20Panel?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwOTM0ODU0MzcwNzk=">
          <motion.div
            animate={animateItem}
            transition={transitionItem1}
            className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
            style={{
              width: "54%",
              height: "3%",
              left: "9.5%",
              top: "6.3%",
            }}
          >
            <Image
              src="/images/solar_panel.png"
              layout="fill"
              objectFit="contain"
              quality={50}
              alt=""
            />
          </motion.div>
        </Link>

        <Link href="/Select/SmartSolar%20MPPT%20Solar%20Charge%20Controller?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDgwNTcwMjI2MTU=">
          <motion.div
            animate={animateItem}
            transition={transitionItem2}
            className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
            style={{
              width: "5%",
              height: "15%",
              left: "66.5%",
              top: "29.5%",
            }}
          >
            <Image
              src="/images/ip22.png"
              layout="fill"
              objectFit="contain"
              quality={50}
              alt=""
            />
          </motion.div>
        </Link>

        <Link href="/Select/SmartSolar%20MPPT%20Solar%20Charge%20Controller?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDgwNTcwMjI2MTU=">
          <motion.div
            animate={animateItem}
            transition={transitionItem3}
            className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
            style={{
              width: "6%",
              height: "10%",
              left: "58.8%",
              top: "32.5%",
            }}
          >
            <Image
              src="/images/solar_controller_graphic.png"
              layout="fill"
              objectFit="contain"
              quality={50}
              alt=""
            />
          </motion.div>
        </Link>

        <Link href="/Select/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
          <motion.div
            animate={animateItem}
            transition={transitionItem4}
            className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
            style={{
              width: "6.85%",
              height: "12%",
              left: "59.7%",
              top: "71%",
            }}
          >
            <Image
              src="/images/battery_graphic.png"
              layout="fill"
              objectFit="contain"
              quality={50}
              alt=""
            />
          </motion.div>
        </Link>

        <motion.div
          animate={animateWheelL}
          transition={transitionWheelL}
          className={transporterStyles.imageContainer}
          style={{
            width: "14.5%",
            height: "34.3%",
            left: "12.8%",
            top: "76%",
          }}
        >
          <Image
            src="/images/transporter-wheel.png"
            layout="fill"
            objectFit="contain"
            quality={50}
            alt=""
          />
        </motion.div>

        <motion.div
          animate={animateWheelR}
          transition={transitionWheelR}
          className={transporterStyles.imageContainer}
          style={{
            width: "14.5%",
            height: "34.3%",
            left: "75.5%",
            top: "76%",
          }}
        >
          <Image
            src="/images/transporter-wheel-2.png"
            layout="fill"
            quality={50}
            alt=""
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
