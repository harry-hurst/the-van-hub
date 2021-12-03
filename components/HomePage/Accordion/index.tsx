// styles
import accordionStyles from "./Accordion.module.css";

// modules
import { motion } from "framer-motion";
import About from "./About";
import Charging from "./Charging";

export default function Accordion() {
  return (
    <motion.div
      layout
      id={accordionStyles.container}
      className="container"
    >
      <About />
      <Charging />
    </motion.div>
  );
}
