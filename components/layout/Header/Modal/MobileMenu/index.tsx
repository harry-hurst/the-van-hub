// styles
import mobileMenuStyles from "./MobileMenu.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// next components
import Link from "next/link";

// data
import { headingsMob } from "../../../../../data/headings";

// modules
import { motion } from "framer-motion";
import {
  container,
  item,
} from "../../../../../framer_motion/variants/mobileMenu";

export default function MobileMenu() {
  // redux
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      id={mobileMenuStyles.container}
    >
          {/* <motion.ul
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={navBarStyles.container}
    >
      {headingsDesk.map((item) => (
        <Link href={item.link} key={item.heading}>
          <a>
            <motion.li
              variants={navBarItem}
              className={`
        nun-sans text-muted border-primary border-top-0 border-bottom border-2
          ${navBarStyles.item}
        `}
            >
              {item.heading}
              {item.dropdown && <i className="bi bi-chevron-down"></i>}
            </motion.li>
          </a>
        </Link>
      ))}
    </motion.ul> */}

      {headingsMob.map(
        (heading: { heading: string; link: string }, index: number) => (
          <Link href={heading.link} key={index}>
            <motion.div
              variants={item}
              id={mobileMenuStyles.item}
              onClick={() => {
                dispatch(clearActiveMenu());
              }}
            >
              <span>{heading.heading}</span>

              <i className="bi bi-chevron-right"></i>
            </motion.div>
          </Link>
        )
      )}
    </motion.div>
  );
}
