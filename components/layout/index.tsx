// styles
import layoutStyles from "./Layout.module.css";

// react
import { useEffect, useRef } from "react";

// components
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

import TopBar from "../Header/TopBar";
import Modal from "../Header/Modal";

import Banner from "../OfferBanner";

import Footer from "../Footer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { clearActiveMenu } from "../../state/activeMenuSlice";
import { RootState } from "../../state/store";

// next components
import Head from "next/head";

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
    <div id={layoutStyles.appContainer}>
      <Head>
        <title>The Van Hub</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main>
        <ShopifyContext>
          <ScreenSizeContext>

            <TopBar burger={burger} searchBar={searchBar} basket={basket} />
            <Modal modal={modal} />

            <div id={layoutStyles.mainContentWrapper}>

              <Banner />

              <AnimateSharedLayout>

                {props.children}
                <Footer />

              </AnimateSharedLayout>
            </div>

          </ScreenSizeContext>
        </ShopifyContext>
      </main>
    </div>
  );
}
