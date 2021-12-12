// styles
import accordionStyles from "./Accordion.module.css";

// react
import { useEffect } from "react";

// modules
import { motion } from "framer-motion";
import About from "./About";
import Charging from "./Charging";

// next components
import { useRouter } from "next/router";

export default function Accordion() {
  // router used for getting data out of the url bar
  const router = useRouter();

  const { accordian } = router.query;

  // useEffect(() => {
  //   if (accordian === "about") {
  //     window.scrollTo(0, 1500);
  //   } else if (accordian === "charging") {
  //     window.scrollTo(0, 500);
  //   }
  // }, [accordian]);

  return (
    <motion.div layout id={accordionStyles.container} className="container">
      <About accordian={accordian} />
      <Charging accordian={accordian} />
    </motion.div>
  );
}
