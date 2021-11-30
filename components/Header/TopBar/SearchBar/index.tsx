// styles
import searchBarStyles from "./SearchBar.module.css";

// react
import { useState, useEffect, useContext } from "react";
import { ScreenSizeContext } from "../../../../context/ScreenSize";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { closeButton } from "../../../../framer_motion/variants/searchBar";
import { placeholder } from "../../../../framer_motion/variants/searchBar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../state/store";

import { changeMenu, clearActiveMenu } from "../../../../state/activeMenuSlice";

import {
  openSearchBar,
  closeSearchBar,
} from "../../../../state/searchBarSlice";

import {
  updateSearchTerm,
  clearSearchTerm,
} from "../../../../state/searchTermSlice";

export default function SearchBar() {
  // redux
  const searchBarStatus = useSelector(
    (state: RootState) => state.searchBar.status
  );

  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const dispatch = useDispatch();

  // useState
  const [open, setOpen] = useState<boolean>();
  const [contentsPresent, setContentsPresent] = useState<boolean>();

  // useEffect
  useEffect(() => {
    if (searchBarStatus === true) {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }
  }, [searchBarStatus]);

  useEffect(() => {
    if (searchBarStatus === true) {
      setTimeout(() => {
        setContentsPresent(true);
      }, 400);
    } else {
      setContentsPresent(false);
    }
  }, [searchBarStatus]);

  // useContext
  const { windowSize } = useContext(ScreenSizeContext);

  function setSearchTerm(e: any) {
    dispatch(updateSearchTerm(e.target.value));
    if (e.target.value !== "") {
      dispatch(changeMenu("searchList"));
    } else {
      dispatch(clearActiveMenu());
    }
  }

  function handleClick() {
    if (activeMenu === "searchList") {
      dispatch(closeSearchBar());
      dispatch(clearSearchTerm());
      dispatch(clearActiveMenu());
    } else {
      dispatch(closeSearchBar());
      dispatch(clearSearchTerm());
    }
  }

  return (
    <div
      id={searchBarStyles.searchBarContainer}
      className={`
      ${(open || windowSize === "large") && `${searchBarStyles.searchOpen}`}
    `}
    >
      <div
        id={searchBarStyles.searchButton}
        className={searchBarStyles.centeredButton}
        onClick={() => dispatch(openSearchBar())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>

      <AnimatePresence>
        {(contentsPresent || windowSize === "large") && (
          <>
            <motion.input
              variants={placeholder}
              initial="hidden"
              animate="visible"
              exit="hidden"
              type="text"
              size={21}
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
              transition={{ duration: 0.2 }}
              id={searchBarStyles.closeButton}
              className={searchBarStyles.centeredButton}
              onClick={() => {
                handleClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
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
