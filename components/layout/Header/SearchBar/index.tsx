// styles
import searchBarDeskStyles from "./SearchBarDesk.module.css";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../state/store";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { closeButton } from "../../../../framer_motion/variants/searchBar";
import { placeholder } from "../../../../framer_motion/variants/searchBar";

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

export default function SearchBar(props: { open: boolean; searchBar?: any }) {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const dispatch = useDispatch();

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
      id={searchBarDeskStyles.container}
      className={` my-1 border${props.open && searchBarDeskStyles.opened}`}
    >
      <div
        ref={props.searchBar}
        id={searchBarDeskStyles.searchBar}
        className="border border-primary border-1 rounded-3"
      >
        <button
          type="button"
          className={` btn btn-primary rounded-1
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
                // style={{ border: "1px solid red" }}
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
                className={` btn btn-primary rounded-1
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
    </div>
  );
}
