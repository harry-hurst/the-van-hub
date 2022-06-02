// styles
import aboutStyles from "./Charging.module.css";

// react
import { useState, useEffect, useContext, useRef } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// components
import Carousel from "./Carousel";

// next components
import Image from "next/image";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { hiddenContent } from "../../../../framer_motion/variants/accordion";

export default function Charging(props: { accordian?: string | string[] }) {
  const [open, setOpen] = useState<boolean>();

  let mobileReference = useRef<any>(null);
  let reference = useRef<any>(null);

  const { windowSize } = useContext(ScreenSizeContext);

  // componentDidUpdate
  useEffect(() => {
    if (props.accordian === "charging") {
      setOpen(true);

      if (windowSize === "tablet") {
        setTimeout(() => {
          mobileReference.current.scrollIntoView();
        }, 800);
      }
    } else {
      setOpen(false);
    }
  }, [props.accordian]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div layout id={aboutStyles.container} className="bg-light rounded">
      <i id={aboutStyles.mobileScrollReference} ref={mobileReference} />
      <i id={aboutStyles.scrollReference} ref={reference} />
      <motion.h4 layout onClick={toggleOpen} id={aboutStyles.heading}>
        CHARGING Lithium Ion Batteries{" "}
        <i
          className={`bi bi-chevron-down
            ${open && `${aboutStyles.rotate}`}
            `}
        ></i>
      </motion.h4>

      <AnimatePresence>
        {open && (
          <motion.div
            className="p-3"
            layout
            variants={hiddenContent}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <p id={aboutStyles.paragraph}>
              Battery-to-Battery chargers draw current from the starter battery
              and step up the voltage to charge the second leisure battery. They
              provide a much deeper and faster re-charge than connecting
              directly to the alternator.
            </p>

            <Carousel />

            <p id={aboutStyles.paragraph}>
              Battery-to-Battery chargers draw current from the starter battery
              and step up the voltage to charge the second leisure battery. They
              provide a much deeper and faster re-charge than connecting
              directly to the alternator.
            </p>

            <div className="row">
              <div className="col-md-5">
                <Image
                  src="/images/B2B.png"
                  layout="responsive"
                  width={4130}
                  height={2537}
                  quality={10}
                  alt="Battery charging diagram"
                />
              </div>
              <div className="col-md-7">
                <Image
                  src="/images/charge-curve.png"
                  layout="responsive"
                  height={669}
                  width={2048}
                  quality={10}
                  alt="Charging voltage curve"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
