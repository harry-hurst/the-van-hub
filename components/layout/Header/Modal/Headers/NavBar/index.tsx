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
      {headingsModule.headings.map((item: { link: string; heading: string; index: number }) => (
        <Link href={item.link} key={item.index}>
          <motion.li
            variants={navBarItem}
            className={`
          nun-sans text-muted border-dark border-top-0 border-bottom border-2
            ${navBarStyles.item}
          `}
          >
            {item.heading}
            {(item.index === 1 || item.index === 2) && <DownArrow />}
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  );
}
