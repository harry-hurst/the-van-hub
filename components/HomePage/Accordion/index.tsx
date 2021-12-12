// styles
import accordionStyles from "./Accordion.module.css";

// modules
import { motion } from "framer-motion";

// components
import About from "./About";
import Charging from "./Charging";

// next components
import { useRouter } from "next/router";

export default function Accordion() {
  // router used for getting data out of the url bar
  const router = useRouter();

  const { accordian } = router.query;

  return (
    <motion.div layout id={accordionStyles.container} className="container">
      <About accordian={accordian}/>
      <Charging accordian={accordian}/>
    </motion.div>
  );

}
