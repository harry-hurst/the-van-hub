// styles
import mobileMenuStyles from "./MobileMenu.module.css";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../state/activeMenuSlice";

// next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { mobileMenu } from "../../../../framer_motion/variants/mobileMenu";

export default function MobileMenu() {
  // redux
  const dispatch = useDispatch();

  // import headings array:
  const headingsModule = require("../../../../data/headings");

  return (
    <motion.div
      variants={mobileMenu}
      key="mobileMenu"
      initial="hidden"
      animate="visible"
      exit="hidden"
      id={mobileMenuStyles.container}
    >
      {headingsModule.headings.map(
        (item: { heading: string; link: string }, index: number) => (
          <Link href={item.link} key={index}>
            <div
              id={mobileMenuStyles.item}
              onClick={() => {
                dispatch(clearActiveMenu());
              }}
            >
              <span>{item.heading}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1px"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </Link>
        )
      )}
    </motion.div>
  );
}
