// styles
import navBarStyles from "./NavBar.module.css";

// modules
import { motion } from "framer-motion";

// variants
import { navBar } from "../../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../../framer_motion/variants/navBar";

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
      {headingsModule.headings.map(
        (item: { link: string; heading: string; dropdown: boolean; index: number }) => (
          <Link href={item.link} key={item.index}>
            <a>
              <motion.li
                variants={navBarItem}
                className={`
          nun-sans text-muted border-primary border-top-0 border-bottom border-2
            ${navBarStyles.item}
          `}
              >
                {item.heading}
                {item.dropdown && (
                  <i className="bi bi-chevron-down"></i>
                )}
              </motion.li>
            </a>
          </Link>
        )
      )}
    </motion.ul>
  );
}
