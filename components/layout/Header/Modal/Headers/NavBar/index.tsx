// styles
import navBarStyles from "./NavBar.module.css";

// modules
import { motion } from "framer-motion";

// variants
import { navBar } from "../../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../../framer_motion/variants/navBar";

// Next components
import Link from "next/link";

import { headingsDesk } from "../../../../../../data/headings";

export default function NavBar() {
  // import headings array:

  return (
    <motion.ul
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={navBarStyles.container}
    >
      {headingsDesk.map(
        (
          heading: { heading: string; link: string; dropdown: boolean },
          index: number
        ) => (
          <Link href={heading.link} key={index}>
            <a>
              <motion.li
                variants={navBarItem}
                className={`
        nun-sans text-secondary
          ${navBarStyles.item}
        `}
              >
                {heading.heading}
                {heading.dropdown && <i className="bi bi-chevron-down"></i>}
              </motion.li>
            </a>
          </Link>
        )
      )}
    </motion.ul>
  );
}
