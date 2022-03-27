// styles
import searchBarStyles from "./SearchBar.module.css";

// react
import { useState, useContext, useEffect } from "react";
import { ScreenSizeContext } from "../../../../../context/ScreenSize";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { closeButton } from "../../../../../framer_motion/variants/searchBar";
import { placeholder } from "../../../../../framer_motion/variants/searchBar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../state/store";

import {
  changeMenu,
  clearActiveMenu,
} from "../../../../../state/activeMenuSlice";

// open and close searchBar actions:
import {
  openSearchBar,
  closeSearchBar,
} from "../../../../../state/searchBarSlice";

// update and clear searchTerm actions:
import {
  updateSearchTerm,
  clearSearchTerm,
} from "../../../../../state/searchTermSlice";

export default function SearchBar(props: { searchBar: any }) {
  // redux
  const searchBarStatus = useSelector(
    (state: RootState) => state.searchBar.status
  );

  // mechanical delay for contents of searchBar:
  const [open, setOpen] = useState<boolean>(false);
  const [contents, setContents] = useState<boolean>(false);

  useEffect(() => {
    if (searchBarStatus === true) {
      setTimeout(() => {
        setOpen(true);
      }, 400);
      setTimeout(() => {
        setContents(true);
      }, 600);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 400);
      setContents(false);
    }
  }, [searchBarStatus]);

  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const dispatch = useDispatch();

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);

  function setSearchTerm(e: any) {
    // dispatch new search term:
    dispatch(updateSearchTerm(e.target.value));

    // set active menu to "searchList" if it not already "searchList":
    if (activeMenu !== "searchList") {
      dispatch(changeMenu("searchList"));
    }
  }

  return (
    <div
      id={searchBarStyles.container}
      className={`
    ${
      (open || windowSize === "large" || windowSize === "extraLarge") &&
      `${searchBarStyles.searchOpen}`
    }
  `}
    >
      <div ref={props.searchBar} id={searchBarStyles.searchBar}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(openSearchBar())}
        >
          <i
            className={` bi bi-search
          ${`${searchBarStyles.searchIcon}`}
        `}
          ></i>
        </button>

        <AnimatePresence>
          {(contents ||
            windowSize === "large" ||
            windowSize === "extraLarge") && (
            <>
              <motion.input
                variants={placeholder}
                initial="hidden"
                animate="visible"
                exit="hidden"
                type="search"
                size={1}
                placeholder="What are you looking for?"
                id="searchBarInput"
                autoComplete="off"
                autoCorrect="off"
                value={searchTerm}
                className="input-group mx-1"
                onChange={(e) => {
                  setSearchTerm(e);
                }}
              />

              <motion.button
                variants={closeButton}
                initial="hidden"
                animate="visible"
                exit="hidden"
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch(closeSearchBar());
                  dispatch(clearActiveMenu());
                  dispatch(clearSearchTerm());
                }}
              >
                <i
                  className={` bi bi-x-lg
          ${`${searchBarStyles.closeIcon}`}
        `}
                ></i>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
