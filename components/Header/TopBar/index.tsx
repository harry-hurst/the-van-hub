// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import ShopIcon from "./ShopIcon";
import BasketIcon from "./BasketIcon";

export default function TopBar(props: {
  burger: any;
  searchBar: any;
  basket: any;
}) {
  return (
    <div id={topBarStyles.container}>
        <div id={topBarStyles.topBar} className="container">
          <BurgerIcon burger={props.burger} />
          <LogoComponent />
          <SearchBar searchBar={props.searchBar} />
          <ShopIcon />
          <BasketIcon basket={props.basket} />
        </div>
    </div>
  );
}
