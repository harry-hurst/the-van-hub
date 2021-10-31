// react
import { useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import burgerIconStyles from "./BurgerIcon.module.css";

// module
import { motion, AnimatePresence } from "framer-motion";

export default function BurgerIcon() {
  // useContext
  const { searchState } =
    useContext(HeaderContext);
  const { headerMenusState, changeHeaderMenusState} = useContext(HeaderContext);

  return (
    <AnimatePresence initial={false}>
      {!searchState && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          id={burgerIconStyles.burgerIconContainer}
          onClick={() => {
            changeHeaderMenusState("burgerMenu", !headerMenusState.burgerMenu);

          }}
        >
          {headerMenusState.burgerMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}

          <AnimatePresence>
            {headerMenusState.burgerMenu && (
              <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                id={burgerIconStyles.dropdownArrow}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
