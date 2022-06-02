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
  search: any;
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
      <div className="bg-secondary mb-1">
        <div id={headerStyles.navContainer} className="px-3 container">
          <BurgerIcon burger={props.burger} />
          <LogoComponent />

          <div ref={props.search} id={headerStyles.searchContainer}>
            {windowSize === "laptop" || windowSize === "desktop" ? (
              <SearchBar
                open={
                  searchBarStatus ||
                  windowSize === "laptop" ||
                  windowSize === "desktop"
                }
              />
            ) : (
              <SearchButton />
            )}
          </div>

          <BasketIcon basket={props.basket} />
        </div>
        {searchBarStatus &&
          (windowSize === "mobile" || windowSize === "tablet") && (
            <div className="px-3 py-1 container">
              <SearchBar
                open={
                  searchBarStatus &&
                  (windowSize === "mobile" || windowSize === "tablet")
                }
              />
            </div>
          )}
      </div>
      <Modal modal={props.modal} />
    </div>
  );
}
