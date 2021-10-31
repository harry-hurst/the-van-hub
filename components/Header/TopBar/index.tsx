// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import BasketIcon from "./BasketIcon";

export default function TopBar() {
  return (
    <div id={topBarStyles.topBarContainer}>
      <div id={topBarStyles.topBar} className="container">
        <BurgerIcon />
        <LogoComponent />
        <SearchBar />
        <BasketIcon />
      </div>
    </div>
  );
}
