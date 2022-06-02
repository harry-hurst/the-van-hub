// styles
import layoutStyles from "./Layout.module.css";

// react
import { useEffect, useRef } from "react";

// redux
import { clearActiveMenu } from "../../state/activeMenuSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";

// context
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

// components
import Header from "./Header";
import Footer from "../Footer";

// modules
import { AnimateSharedLayout } from "framer-motion";

export default function Layout(props: { children: React.ReactNode }) {
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // click away listener
  let modal = useRef<any>(null);
  let burger = useRef<any>(null);
  let searchBar = useRef<any>(null);
  let basket = useRef<any>(null);

  const dispatch = useDispatch();

  const handleClickAway = (event: { target: any }) => {
    if (
      activeMenu !== null &&
      modal.current &&
      !(
        modal.current.contains(event.target) ||
        burger.current.contains(event.target) ||
        searchBar.current.contains(event.target) ||
        basket.current.contains(event.target)
      )
    ) {
      dispatch(clearActiveMenu());
    }
  };

  // componentWillUnmount()
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
