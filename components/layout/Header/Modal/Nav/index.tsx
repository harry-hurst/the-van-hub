import navStyles from "./Nav.module.css";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import { changeActiveMenu } from "../../../../../state/activeMenuSlice";

import Link from "next/link";

import { motion } from "framer-motion";
import { navBar } from "../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../framer_motion/variants/navBar";

import { navHeadings, shopHeadings } from "../../../../../data/headings";

import { useRouter } from "next/router";

export interface headingsTypes {
  heading: string;
  as: string;
  href: string;
  dropdown: boolean;
}

export default function Nav(props: { windowSize: string }) {
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  const [headings, setHeadings] = useState<headingsTypes[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (FirstPositionDomain === "shop") {
      setHeadings(shopHeadings);
    } else {
      setHeadings(navHeadings);
    }
  }, [FirstPositionDomain]);

  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  const openDropdown = () => {
    dispatch(changeActiveMenu("navMenu"));
  };

  // Return Nav component if:
  // (1) mobile view and mobileNav selected
  // (2) not mobile view and no menu selected
  if (
    headings !== undefined &&
    ((props.windowSize === "mobile" && activeMenu === "mobileNav") ||
      (props.windowSize !== "mobile" && activeMenu === null))
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
            heading: {
              heading: string;
              as: string;
              href: string;
              dropdown: boolean;
            },
            index: number
          ) => (
            <motion.li
              key={index}
              variants={navBarItem}
              className={`
        nun-sans text-secondary
          ${navStyles.item}
          ${props.windowSize !== "mobile" && navStyles.itemDesktop}
        `}
            >
              {heading.dropdown ? (
                <a onClick={heading.dropdown && openDropdown}>
                  {heading.heading}
                  <i className="bi bi-chevron-down"></i>
                </a>
              ) : (
                <Link as={heading.as} href={heading.href}>
                  <a>{heading.heading}</a>
                </Link>
              )}
            </motion.li>
          )
        )}
      </motion.ul>
    );
  } else {
    return null;
  }
}
