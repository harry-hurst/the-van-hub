// react
import { useContext } from "react";
import { TopBarContext } from "../../../../context/TopBarContext";

// styles
import searchBarStyles from "./SearchBar.module.css";

export default function SearchBar() {
  // context
  const { searchState, changeSearchState } = useContext(TopBarContext);

  return (
    <div
      id={searchBarStyles.searchBarContainer}
      className={`${searchState && `${searchBarStyles.searchOpen}`}`}
    >
      <div
        id={searchBarStyles.searchButton}
        className={searchBarStyles.centeredButton}
        onClick={() => {
          changeSearchState(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>

      {searchState && (
        <>
          <input
            type="text"
            size={21}
            placeholder="what are you looking for?"
            id={searchBarStyles.searchInput}
          />
          <div
            id={searchBarStyles.closeButton}
            className={searchBarStyles.centeredButton}
            onClick={() => {
              changeSearchState(false);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
