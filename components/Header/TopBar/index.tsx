// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import BasketIcon from "./BasketIcon";
import SearchBar from "./SearchBar";

import TopBarContextComponent from "../../../context/TopBarContext";

export default function TopBar() {
  return (
    <div id={topBarStyles.topBarContainer}>
      <div id={topBarStyles.topBar} className="container">
        <TopBarContextComponent>
          <BurgerIcon />
          <SearchBar />
          <BasketIcon />
        </TopBarContextComponent>
      </div>
    </div>
  );
}
