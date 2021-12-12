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
              <motion.div variants={navBarItem} id={navBarStyles.item}>
                <span>{item.heading}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1px"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
