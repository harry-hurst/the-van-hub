// styles
import topBarStyles from "./TopBar.module.css";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import BasketIcon from "./BasketIcon";

export default function TopBar(props: {
  burger: any;
  searchBar: any;
  basket: any;
}) {
  

  return (
    <div className="bg-dark mb-1">
      <div id={topBarStyles.container} className="px-3 container">
        <BurgerIcon burger={props.burger} />

        <LogoComponent />

        <SearchBar searchBar={props.searchBar} />

        <BasketIcon basket={props.basket} />


      </div>
    </div>
  );
}
