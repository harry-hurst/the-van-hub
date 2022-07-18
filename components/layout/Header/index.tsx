// styles
import headerStyles from "./Header.module.css";

// react hooks
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
import BasketIcon from "./BasketIcon";
import Modal from "./Modal";
import SearchButton from "./SearchButton";

const Header = (props: {
  burgerRef: any;
  searchBoxRef: any;
  basketRef: any;
  modalRef: any;
  searchBarRef: any;
}) => {
  const searchBarStatus = useSelector(
    (state: RootState) => state.searchBar.status
  );

  const { windowSize } = useContext(ScreenSizeContext);

  return (
    <div id={headerStyles.container}>
      <div
        className="bg-secondary mb-1"
        id={headerStyles.header}
      >
        <div id={headerStyles.navContainer} className="px-3 container">
          
          <div className="bg-primary" id={headerStyles.circle}></div>

          <BurgerIcon burgerRef={props.burgerRef} />

          <LogoComponent />

          <div ref={props.searchBoxRef} id={headerStyles.searchContainer}>
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

          <BasketIcon basketRef={props.basketRef} />
        </div>

        {searchBarStatus &&
          (windowSize === "mobile" || windowSize === "tablet") && (
            <div
              className="px-3 py-1 container"
              style={{ position: "relative" }}
            >
              <SearchBar open={true} searchBarRef={props.searchBarRef} />
            </div>
          )}
      </div>
      <Modal modalRef={props.modalRef} />
    </div>
  );
};

export default Header;
