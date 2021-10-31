// react
import { useContext } from "react";
import { HeaderContext } from "../../../context/HeaderContextComponent";

// styles
import modalStyles from "./Modal.module.css";

// components
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

// modules
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
  const { headerMenusState } = useContext(HeaderContext);

  return (
    <div id={modalStyles.modalContainer}>
      <div className="container">
        <div
          id={modalStyles.modal}
          className={`${
            (headerMenusState.burgerMenu ||
              headerMenusState.searchMenu ||
              headerMenusState.basketMenu) &&
            `${modalStyles.modalExpanded}`
          }`}
        >
          <AnimatePresence>
            {(headerMenusState.burgerMenu ||
              headerMenusState.searchMenu ||
              headerMenusState.basketMenu) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                id={modalStyles.dropdownArrowContainer}
                className={`

${headerMenusState.burgerMenu && `${modalStyles.left}`}
${headerMenusState.searchMenu && `${modalStyles.middle}`}
${headerMenusState.basketMenu && `${modalStyles.right}`}

`}
              >
                <i id={modalStyles.dropdownArrow} />
              </motion.div>
            )}
          </AnimatePresence>

          <div
            id={modalStyles.modalInner}
            className={`${
              (headerMenusState.burgerMenu ||
                headerMenusState.searchMenu ||
                headerMenusState.basketMenu) &&
              `${modalStyles.modalInnerExpanded}`
            }`}
          >
            {/* <NavBar />
            <MobileMenu /> */}
            test
          </div>
        </div>
      </div>
    </div>
  );
}
