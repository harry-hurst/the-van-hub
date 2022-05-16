// styles
import navBarStyles from "./NavBar.module.css";

import { useState, useEffect } from "react";

// modules
import { motion } from "framer-motion";

// variants
import { navBar } from "../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../framer_motion/variants/navBar";

// Next components
import Link from "next/link";

// use headingsDesk for homepage and shopHeadings whin in /shop:
import { headingsDesk } from "../../../../../data/headings";
import { shopHeadings } from "../../../../../data/headings";

// next components
import { useRouter } from "next/router";

export default function NavBar(props: { windowSize: string }) {
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  const [headings, setHeadings] = useState<any>(headingsDesk);

  useEffect(() => {
    if (FirstPositionDomain && FirstPositionDomain.toString() === "shop") {
      setHeadings(shopHeadings);
    } else {
      setHeadings(headingsDesk);
    }
  }, [FirstPositionDomain]);

  return (
    <motion.ul
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={navBarStyles.container}
      className={` ${
        props.windowSize !== "tiny" && navBarStyles.containerDesktop
      } `}
    >
      {headings.map(
        (
          heading: { heading: string; link: string; dropdown: boolean },
          index: number
        ) => (
          <motion.li
            variants={navBarItem}
            className={`
        nun-sans text-secondary
          ${navBarStyles.item}
          ${props.windowSize !== "tiny" && navBarStyles.itemDesktop}
        `}
          >
            <Link href={heading.link} key={index}>
              <a>
                {heading.heading}
                {heading.dropdown && <i className="bi bi-chevron-down"></i>}
              </a>
            </Link>
          </motion.li>
        )
      )}
    </motion.ul>
  );
}
