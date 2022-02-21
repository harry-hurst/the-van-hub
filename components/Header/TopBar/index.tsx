// styles
import topBarStyles from "./TopBar.module.css";

// react
import { useContext } from "react";
import { ScreenSizeContext } from "../../../context/ScreenSize";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import BasketIcon from "./BasketIcon";

// next components
import Link from "next/link";

export default function TopBar(props: {
  burger: any;
  searchBar: any;
  basket: any;
}) {
  const { windowSize } = useContext(ScreenSizeContext);

  return (
    <div id={topBarStyles.container}>
      <BurgerIcon burger={props.burger} />

      <LogoComponent />

      <SearchBar searchBar={props.searchBar} />

      <BasketIcon basket={props.basket} />

      {windowSize === "small" && (
        <Link href="/shop">
          <button
            type="button"
            className="btn btn-success btn-sm"
            style={{ color: "black", marginLeft: "5px" }}
          >
            SHOP
          </button>
        </Link>
      )}
    </div>
  );
}
