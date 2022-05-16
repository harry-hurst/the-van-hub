// styles
import searchBarMobStyles from "./SearchButton.module.css";

// redux
import { useDispatch } from "react-redux";

// open and close searchBar actions:
import {
  toggleSearchBar,
} from "../../../../state/searchBarStateSlice";

export default function SearchBarMob() {

  const dispatch = useDispatch();

  return (
    <button
      id={searchBarMobStyles.container}
      className="btn"
      onClick={() => dispatch(toggleSearchBar())}
    >
      <i
        className={` bi bi-search text-white
      ${`${searchBarMobStyles.searchIcon}`}
    `}
      ></i>
    </button>
  );
}
