// styles
import mobileMenuStyles from "./MobileMenu.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { container, item } from "../../../../../framer_motion/variants/mobileMenu";

// svg
import RightArrow from "../../../../../assets/svg/RightArrow";

export default function MobileMenu() {
  // redux
  const dispatch = useDispatch();

  // import headings array:
  const headingsModule = require("../../../../../data/headings");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      id={mobileMenuStyles.container}
    >
      {headingsModule.headings.map(
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




              <RightArrow />

            </motion.div>
          </Link>
        )
      )}
    </motion.div>
  );
}
