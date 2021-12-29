// styles
import sprinterStyles from "./Sprinter.module.css";

// react
import { useState, useEffect } from "react";

// next components
import Image from "next/image";
import Link from "next/link";

// modules
import { motion } from "framer-motion";

export default function Sprinter(props: { slideIndex: number }) {
  const [displacement, setDisplacement] = useState<string>("100vw");

  useEffect(() => {
    if (props.slideIndex === 0) {
      setDisplacement("100vw");
    } else if (props.slideIndex === 1) {
      setDisplacement("0");
    }
  }, [props.slideIndex]);
  return (
    <motion.div
      initial={false}
      animate={{ x: displacement }}
      transition={{ duration: 0.4, type: "spring", damping: 15 }}
      id={sprinterStyles.container}
    >
      <Image
        src="/images/sprinter.png"
        layout="fill"
        objectFit="contain"
        quality={50}
        alt=""
      />

      <Link href="/Select/12V%20100Ah%20Lithium%20LiFePO4%20Leisure%20Battery?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzczNDcyNTAzMjc=">
        <motion.div
          className={`${sprinterStyles.imageContainer} ${sprinterStyles.pointer}`}
          style={{
            width: "7.3%",
            height: "11.5%",
            left: "52.7%",
            top: "80.3%",
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
          className={`${sprinterStyles.imageContainer} ${sprinterStyles.pointer}`}
          style={{
            width: "7.3%",
            height: "11.5%",
            left: "61.7%",
            top: "80.3%",
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
          className={`${sprinterStyles.imageContainer} ${sprinterStyles.pointer}`}
          style={{
            width: "8.6%",
            height: "8%",
            left: "40.2%",
            top: "33.35%",
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
          <div id={sprinterStyles.plugContainer}>
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

      <Link href="/Select/Pro%20Batt%20Ultra%20Battery%20to%20Battery%20Charger?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NTQ3MTkyMTU3Njc=">
        <motion.div
          className={`${sprinterStyles.imageContainer} ${sprinterStyles.pointer}`}
          style={{
            width: "4.3%",
            height: "11%",
            left: "58.5%",
            top: "42.2%",
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

      <motion.div
        animate={{
          y: "-10%",
          rotate: 360,
        }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          type: "spring",
          damping: 8,

          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "mirror",
          rotate: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className={sprinterStyles.imageContainer}
        style={{
          height: "34.5%",
          width: "14.8%",
          left: "15.9%",
          top: "83%",
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
      </motion.div>

      <motion.div
        animate={{
          y: "-10%",
          rotate: 360,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: 8,

          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "mirror",
          rotate: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className={sprinterStyles.imageContainer}
        style={{
          height: "34.5%",
          width: "14.8%",
          left: "78.6%",
          top: "83%",
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
      </motion.div>
    </motion.div>
  );
}
