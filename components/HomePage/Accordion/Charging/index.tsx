// styles
import aboutStyles from "./Charging.module.css";

// react
import { useState } from "react";

// components
import ChargingDiagram from "./ChargingDiagram";
import ChargingGraph from "./ChargingGraph";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { hiddenContent } from "../../../../framer_motion/variants/accordion";

export default function Charging() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div layout id={aboutStyles.container}>
      <motion.h1 layout onClick={toggleOpen} id={aboutStyles.heading}>
        Charging Lithium Ion
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
