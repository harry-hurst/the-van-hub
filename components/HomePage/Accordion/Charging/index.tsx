// styles
import aboutStyles from "./Charging.module.css";

// react
import { useState, useEffect } from "react";

// components
import ChargingDiagram from "./ChargingDiagram";
import ChargingGraph from "./ChargingGraph";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { hiddenContent } from "../../../../framer_motion/variants/accordion";

export default function Charging(props: { accordian?: string | string[] }) {
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    if (props.accordian === "charging") {
      setOpen(true);
      setTimeout(() => {
        window.scrollTo(0, 225);
      }, 1000);
    } else {
      setOpen(false);
    }
  }, [props.accordian]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div layout id={aboutStyles.container}>
      <motion.h1 layout onClick={toggleOpen} id={aboutStyles.heading}>
        Charging Lithium Ion{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5px"
          id={aboutStyles.arrow}
          className={`${open && `${aboutStyles.rotate}`} bi bi-chevron-down`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </motion.h1>

      <AnimatePresence>
        {open && (
          <motion.div
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

            <ChargingDiagram />
            <ChargingGraph />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
