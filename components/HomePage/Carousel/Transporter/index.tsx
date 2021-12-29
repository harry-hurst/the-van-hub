// styles
import transporterStyles from "./Transporter.module.css";

// react
import { useEffect, useState } from "react";

// next components
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Transporter(props: { slideIndex: number }) {
  const [displacement, setDisplacement] = useState<string>("0");

  useEffect(() => {
    if (props.slideIndex === 0) {
      setDisplacement("0");
    } else if (props.slideIndex === 1) {
      setDisplacement("-100vw");
    }
  }, [props.slideIndex]);

  return (
    <motion.div
      animate={{ x: displacement }}
      transition={{ duration: 0.4, type: "spring", damping: 15 }}
      id={transporterStyles.container}
    >
      <Image
        src="/images/transporter.png"
        layout="fill"
        objectFit="contain"
        quality={50}
        alt=""
      />

      <Link href="/Select/SmartSolar%20MPPT%20Solar%20Charge%20Controller?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDgwNTcwMjI2MTU=">
        <motion.div
          className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
          style={{
            width: "5%",
            height: "15%",
            left: "66.5%",
            top: "29.5%",
          }}
          whileHover={{ scale: 1.5 }}
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
          className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
          style={{
            width: "6%",
            height: "10%",
            left: "58.8%",
            top: "32.5%",
          }}
          whileHover={{ scale: 1.5 }}
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
          className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
          style={{
            width: "6.85%",
            height: "12%",
            left: "59.7%",
            top: "71%",
          }}
          whileHover={{ scale: 1.5 }}
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

      <Link href="/Select/200W%20Monocrystalline%20Rigid%20Framed%20Solar%20Panel?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwOTM0ODU0MzcwNzk=">
        <motion.div
          className={`${transporterStyles.imageContainer} ${transporterStyles.pointer}`}
          style={{
            width: "54%",
            height: "3%",
            left: "9.5%",
            top: "6.3%",
          }}
          whileHover={{ scale: 1.2 }}
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
        className={transporterStyles.imageContainer}
        style={{
          width: "14.5%",
          height: "34.3%",
          left: "12.8%",
          top: "75%",
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
        className={transporterStyles.imageContainer}
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
        style={{
          width: "14.5%",
          height: "34.3%",
          left: "75.5%",
          top: "75%",
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
  );
}
