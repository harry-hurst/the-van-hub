// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import ShopIcon from "./ShopIcon";
import BasketIcon from "./BasketIcon";

export default function TopBar() {
  return (
    <div id={topBarStyles.container}>
      <div id={topBarStyles.topBar} className="container">
        <BurgerIcon />
        <LogoComponent />
        <SearchBar />
        <ShopIcon />
        <BasketIcon />
      </div>
    </div>
  );
}
