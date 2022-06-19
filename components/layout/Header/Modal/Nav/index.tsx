// styles
import navStyles from "./Nav.module.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import { changeActiveMenu } from "../../../../../state/activeMenuSlice";

// Next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { navBar } from "../../../../../framer_motion/variants/navBar";
import { navBarItem } from "../../../../../framer_motion/variants/navBar";

// destructure the windowSize prop:
export default function Nav(props: {
  windowSize: string;
  headings: { heading: string; as: string; href: string; dropdown: boolean }[];
}) {
  //redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);



  // redux
  const dispatch = useDispatch();

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
        {props.headings.map(
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
              <Link as={heading.as} href={heading.href}>
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
          )
        )}
      </motion.ul>
    );
  } else {
    return null;
  }
}
