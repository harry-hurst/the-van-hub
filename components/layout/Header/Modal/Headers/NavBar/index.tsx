// styles
import navBarStyles from "./NavBar.module.css";

// modules
import { motion } from "framer-motion";

// variants
import { navBar } from "../../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../../framer_motion/variants/navBar";

// components
import DownArrow from "../../../../../../assets/svg/DownArrow";

// Next components
import Link from "next/link";

export default function NavBar() {
  // import headings array:
  const headingsModule = require("../../../../../../data/headings");

  return (
    <motion.ul
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={navBarStyles.container}
    >
      {headingsModule.headings.map((item: any, index: number) => (
        <Link href={item.link} key={index}>
          <motion.li
            variants={navBarItem}
            className={`
          nun-sans
            ${navBarStyles.item}

          `}
          >
            {item.heading}
            {(index === 1 || index === 2) && <DownArrow />}
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  );
}
