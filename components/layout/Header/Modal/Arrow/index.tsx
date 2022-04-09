// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../state/store";

// styles
import arrowStyles from "./Arrow.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function Arrow() {
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  return (
    <AnimatePresence>
      {(activeMenu !== null && activeMenu !== "navMenu") && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
          id={arrowStyles.dropdownArrowContainer}
          className={`
            ${activeMenu === "mobileMenu" && `${arrowStyles.left}`}
            ${activeMenu === "searchList" && `${arrowStyles.middle}`}
            ${activeMenu === "basketMenu" && `${arrowStyles.right}`}
          `}
        >
          <i id={arrowStyles.dropdownArrow} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
