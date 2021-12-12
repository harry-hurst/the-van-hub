// styles
import navBarStyles from "./NavBar.module.css";

// react
import { useContext, useState, useEffect } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { navBar } from "../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../framer_motion/variants/navBar";

// Next components
import Link from "next/link";

export default function NavBar() {
  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);

  // mechanical delay:
  const [present, setPresent] = useState<boolean>();

  // import headings array:
  const headingsModule = require("../../../../data/headings");

  useEffect(() => {
    if (
      (activeMenu === null || activeMenu === "navMenu") &&
      (windowSize === "medium" || windowSize === "large")
    ) {
      setTimeout(() => {
        setPresent(true);
      }, 800);
    } else {
      setPresent(false);
    }
  }, [activeMenu, windowSize]);

  return (
    <AnimatePresence>
      {present && (
        <motion.div
          variants={navBar}
          initial="hidden"
          animate="visible"
          exit="hidden"
          id={navBarStyles.container}
        >
          
          {headingsModule.headings.map((item: any, index: number) => (
            <Link href={item.link} key={index}>
              <motion.span variants={navBarItem} id={navBarStyles.heading}>{item.heading}</motion.span>
            </Link>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
