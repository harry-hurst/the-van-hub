// styles
import headerStyles from "./Header.module.css";

// react
import { useContext } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

// context
import { ScreenSizeContext } from "../../../context/ScreenSize";

// components
import BurgerIcon from "./BurgerIcon";
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import BasketIcon from "./BasketIcon";
import Modal from "./Modal";

// import { motion } from "framer-motion";

export default function Header(props: {
  burger: any;
  searchBar: any;
  basket: any;
  modal: any;
}) {
  const searchBarStatus = useSelector(
    (state: RootState) => state.searchBar.status
  );

  // global screen size variable.
  const { windowSize } = useContext(ScreenSizeContext);

  return (
    <div id={headerStyles.container}>
      <div className="bg-dark mb-1">
        <div id={headerStyles.navContainer} className="px-3 container">
          <BurgerIcon burger={props.burger} />
          <LogoComponent />

          {windowSize === "medium" ||
          windowSize === "large" ||
          windowSize === "extraLarge" ? (
            <SearchBar
              open={
                searchBarStatus ||
                windowSize === "large" ||
                windowSize === "extraLarge"
              }
              searchBar={props.searchBar}
            />
          ) : (
            <SearchButton />
          )}

          <BasketIcon basket={props.basket} />
        </div>

        <div className="px-3 container border border-dark">
          {searchBarStatus &&
            (windowSize === "tiny" || windowSize === "small") && (
              <SearchBar
                open={
                  searchBarStatus &&
                  (windowSize === "tiny" || windowSize === "small")
                }
              />
            )}
        </div>
      </div>
      <Modal modal={props.modal} />
    </div>
  );
}
