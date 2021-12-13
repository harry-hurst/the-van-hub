// styles
import searchBarStyles from "./SearchBar.module.css";

// react
import { useState, useContext, useEffect } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { closeButton } from "../../../../framer_motion/variants/searchBar";
import { placeholder } from "../../../../framer_motion/variants/searchBar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../state/store";

import { changeMenu, clearActiveMenu } from "../../../../state/activeMenuSlice";

// open and close searchBar actions:
import {
  openSearchBar,
  closeSearchBar,
} from "../../../../state/searchBarSlice";

// update and clear searchTerm actions:
import {
  updateSearchTerm,
  clearSearchTerm,
} from "../../../../state/searchTermSlice";

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
    if (e.target.value !== "") {
      // set active menu to "searchList" if it not already "searchList":
      if (activeMenu !== "searchList") {
        dispatch(changeMenu("searchList"));
      }
    } else {
      // if term changed to "" clear active menu:
      dispatch(clearActiveMenu());
    }
  }

  return (
    <div
      ref={props.searchBar}
      id={searchBarStyles.searchBarContainer}
      className={`
      ${(open || windowSize === "large") && `${searchBarStyles.searchOpen}`}
    `}
    >
      <div
        id={searchBarStyles.searchButton}
        onClick={() => dispatch(openSearchBar())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>

      <AnimatePresence>
        {(contents || windowSize === "large") && (
          <>
            <motion.input
              variants={placeholder}
              initial="hidden"
              animate="visible"
              exit="hidden"
              type="text"
              size={1}
              placeholder="what are you looking for?"
              id="searchBarInput"
              autoComplete="off"
              autoCorrect="off"
              value={searchTerm}
              className={searchBarStyles.searchInput}
              onChange={(e) => {
                setSearchTerm(e);
              }}
            />

            <motion.div
              variants={closeButton}
              initial="hidden"
              animate="visible"
              exit="hidden"
              id={searchBarStyles.closeButton}
              onClick={() => {
                dispatch(closeSearchBar());
                dispatch(clearActiveMenu());
                dispatch(clearSearchTerm());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
