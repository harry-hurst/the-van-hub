// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import BasketIcon from "./BasketIcon";
import SearchBar from "./SearchBar";

import TopBarContextComponent from "../../../context/TopBarContext";
import { LogoComponent } from "./LogoComponent";

export default function TopBar() {
  return (
    <div id={topBarStyles.topBarContainer}>
      <div id={topBarStyles.topBar} className="container">
        <TopBarContextComponent>
          <BurgerIcon />
          <LogoComponent />
          <SearchBar />
          <BasketIcon />
        </TopBarContextComponent>
      </div>
    </div>
  );
}
