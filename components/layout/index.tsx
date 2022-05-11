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
import { RootState } from "../../state/store";

// modules
import { AnimateSharedLayout } from "framer-motion";

export default function Layout(props: { children: React.ReactNode }) {
  // click away listener
  let modal = useRef<any>(null);
  let burger = useRef<any>(null);
  let searchBar = useRef<any>(null);
  let basket = useRef<any>(null);

  const searchBarOpen = useSelector(
    (state: RootState) => state.searchBar.status
  );
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);
  const collectionId = useSelector((state: RootState) => state.collectionId.id);
  const bannerStatus = useSelector(
    (state: RootState) => state.bannerStatus.status
  );

  const dispatch = useDispatch();

  const handleClickAway = (event: { target: any }) => {
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
          <div
            id={layoutStyles.mainContentWrapper}
          >
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

            <div
              style={{
                position: "fixed",
                top: "130px",
                right: "20px",
                border: "1px solid red",
                backgroundColor: "white",
              }}
            >
              searchBar: {searchBarOpen.toString()}
              <br />
              searchTerm: {searchTerm}
              <br />
              activeMenu: {activeMenu === null ? "null" : activeMenu}
              <br />
              collectionId: {collectionId === null ? "null" : collectionId}
              <br />
              bannerStatus: {bannerStatus.toString()}
              <br />
            </div>
          </div>
        </ScreenSizeContext>
      </ShopifyContext>
    </main>
  );
}
