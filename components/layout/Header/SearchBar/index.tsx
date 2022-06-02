// styles
import searchBarDeskStyles from "./SearchBarDesk.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../state/store";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { closeButton } from "../../../../framer_motion/variants/searchBar";
import { placeholder } from "../../../../framer_motion/variants/searchBar";

import { changeActiveMenu, clearActiveMenu } from "../../../../state/activeMenuSlice";

// open and close searchBar actions:
import {
  openSearchBar,
  closeSearchBar,
} from "../../../../state/searchBarStateSlice";

// update and clear searchTerm actions:
import {
  updateSearchTerm,
  clearSearchTerm,
} from "../../../../state/searchTermSlice";

export default function SearchBar(props: { open: boolean }) {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const dispatch = useDispatch();

  function setSearchTerm(e: any) {
    // dispatch new search term:
    dispatch(updateSearchTerm(e.target.value));

    // set active menu to "searchList" if it not already "searchList":
    if (activeMenu !== "searchList") {
      dispatch(changeActiveMenu("searchList"));
    }
  }

  return (
    <div
      id={searchBarDeskStyles.searchBar}
      className="border border-primary border-1 rounded-3 bg-white"
    >
      <button
        type="button"
        className={` btn btn-primary rounded-2 p-0
          ${`${searchBarDeskStyles.buttonCustom}`}
        `}
        onClick={() => dispatch(openSearchBar())}
      >
        <i
          className={` bi bi-search
          ${`${searchBarDeskStyles.searchIcon}`}
        `}
        ></i>
      </button>

      <AnimatePresence>
        {props.open && (
          <>
            <motion.input
              variants={placeholder}
              initial="hidden"
              animate="visible"
              exit="hidden"
              type="search"
              size={1}
              placeholder="what are you looking for?"
              id="searchBarInput"
              autoComplete="off"
              autoCorrect="off"
              value={searchTerm}
              className={`input-group mx-1 ${`${searchBarDeskStyles.searchInput}`}`}
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
              className={` btn btn-primary rounded-2 p-0
                ${`${searchBarDeskStyles.buttonCustom}`}
              `}
              onClick={() => {
                dispatch(closeSearchBar());
                dispatch(clearActiveMenu());
                dispatch(clearSearchTerm());
              }}
            >
              <i
                className={` bi bi-x-lg
          ${`${searchBarDeskStyles.closeIcon}`}
        `}
              ></i>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
