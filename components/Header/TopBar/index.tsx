// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import BasketIcon from "./BasketIcon";

import TopBarContext from "../../../context/TopBarContextComponent";

export default function TopBar() {
  return (
    <div id={topBarStyles.topBarContainer}>
      <div id={topBarStyles.topBar} className="container">
        <TopBarContext>
          <BurgerIcon />
          <LogoComponent />
          <SearchBar />
          <BasketIcon />
        </TopBarContext>
      </div>
    </div>
  );
}
