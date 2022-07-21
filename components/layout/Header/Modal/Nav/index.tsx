import navStyles from "./Nav.module.css";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import {
  changeActiveMenu,
  clearActiveMenu,
} from "../../../../../state/activeMenuSlice";

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
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

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

  const dispatch = useDispatch();

  const openDropdown = (heading: string) => {
    dispatch(changeActiveMenu(heading));
  };

  const closeDropdown = () => {
    dispatch(clearActiveMenu());
  };

  if (headings !== undefined) {
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
          ${activeMenu === heading.heading && navStyles.active}
        `}
            >
              {heading.dropdown ? (
                <a onClick={() => openDropdown(heading.heading)}>
                  {heading.heading}
                  <i className="bi bi-chevron-down"></i>
                </a>
              ) : (
                <Link as={heading.as} href={heading.href}>
                  <a onClick={closeDropdown}>{heading.heading}</a>
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
