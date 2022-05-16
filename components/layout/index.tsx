// styles
import layoutStyles from "./Layout.module.css";

// react
import { useEffect, useRef } from "react";

// components
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

import Header from "./Header";
import Footer from "../Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearActiveMenu } from "../../state/activeMenuSlice";
import { closeSearchBar } from "../../state/searchBarStateSlice";
import { RootState } from "../../state/store";

// modules
import { AnimateSharedLayout } from "framer-motion";

export default function Layout(props: { children: React.ReactNode }) {
  // click away listener
  let modal = useRef<any>(null);
  let burger = useRef<any>(null);
  let searchBar = useRef<any>(null);
  let basket = useRef<any>(null);

  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  const dispatch = useDispatch();

  // clickaway listener on layout component.
  const handleClickAway = (event: { target: any }) => {
    // if click was not in any of the components, clear the active menu:
    if (
      modal.current &&
      activeMenu !== null &&
      !(
        modal.current.contains(event.target) ||
        burger.current.contains(event.target) ||
        searchBar.current.contains(event.target) ||
        basket.current.contains(event.target)
      )
    ) {
      dispatch(clearActiveMenu());
      dispatch(closeSearchBar());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAway, true);
    return () => {
      document.removeEventListener("click", handleClickAway, true);
    };
  });

  return (
    <main>
      <ShopifyContext>
        <ScreenSizeContext>
          <div id={layoutStyles.mainContentWrapper}>
            <Header
              burger={burger}
              search={searchBar}
              basket={basket}
              modal={modal}
            />

            <AnimateSharedLayout>
              <div>{props.children}</div>
              <Footer />
            </AnimateSharedLayout>
          </div>
        </ScreenSizeContext>
      </ShopifyContext>
    </main>
  );
}
