// react
import { useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import arrowStyles from "./Arrow.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function Arrow() {
  const { headerMenusState } = useContext(HeaderContext);

  return (
    <AnimatePresence>
      {(headerMenusState.mobileMenu ||
        headerMenusState.searchMenu ||
        headerMenusState.basketMenu) && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
          id={arrowStyles.dropdownArrowContainer}
          className={`

${headerMenusState.mobileMenu && `${arrowStyles.left}`}
${headerMenusState.searchMenu && `${arrowStyles.middle}`}
${headerMenusState.basketMenu && `${arrowStyles.right}`}

`}
        >
          <i id={arrowStyles.dropdownArrow} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
