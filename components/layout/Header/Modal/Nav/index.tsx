// styles
import navStyles from "./Nav.module.css";

// react hooks
import { useState, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import { changeActiveMenu } from "../../../../../state/activeMenuSlice";

// Next components
import Link from "next/link";
import { useRouter } from "next/router";

// modules
import { motion } from "framer-motion";
import { navBar } from "../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../framer_motion/variants/navBar";

// use navHeadings for homepage and shopHeadings when in /shop:
import { navHeadings, shopHeadings } from "../../../../../data/headings";

// destructure the windowSize prop:
export default function Nav(props: { windowSize: string }) {
  
  //redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // next component
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  // redux
  const dispatch = useDispatch();

  const [headings, setHeadings] = useState<
    {
      heading: string;
      link: string;
      dropdown: boolean;
    }[]
  >(shopHeadings);

  // componentDidUpdate()
  useEffect(() => {
    if (FirstPositionDomain && FirstPositionDomain.toString() === "shop") {
      setHeadings(shopHeadings);
    } else {
      setHeadings(navHeadings);
    }
  }, [FirstPositionDomain]);

  if (
    (props.windowSize === "mobile" && activeMenu === "mobileNav") ||
    (props.windowSize !== "mobile" && activeMenu === null)
  ) {
    return (
      <motion.ul
        variants={navBar}
        initial="hidden"
        animate="visible"
        exit="exit"
        id={navStyles.container}
        className={` ${
          props.windowSize !== "mobile" && navStyles.containerDesktop
        } `}
      >
        {headings.map(
          (
            heading: { heading: string; link: string; dropdown: boolean },
            index: number
          ) =>
            heading.dropdown ? (
              <motion.li
                key={index}
                variants={navBarItem}
                className={`
        nun-sans text-secondary
          ${navStyles.item}
          ${props.windowSize !== "mobile" && navStyles.itemDesktop}
        `}
              >
                <Link href={heading.link}>
                  <a
                    onClick={() => {
                      dispatch(changeActiveMenu("navMenu"));
                    }}
                  >
                    {heading.heading}
                    <i className="bi bi-chevron-down"></i>
                  </a>
                </Link>
              </motion.li>
            ) : (
              <motion.li
                key={index}
                variants={navBarItem}
                className={`
        nun-sans text-secondary
          ${navStyles.item}
          ${props.windowSize !== "mobile" && navStyles.itemDesktop}
        `}
              >
                <Link href={heading.link}>
                  <a>{heading.heading}</a>
                </Link>
              </motion.li>
            )
        )}
      </motion.ul>
    );
  } else {
    return null;
  }
}
