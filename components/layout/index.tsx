// styles
import layoutStyles from "./Layout.module.css";

// components
import Footer from "../Footer";

import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

import TopBar from "../Header/TopBar";
import Modal from "../Header/Modal";

// next components
import Head from "next/head";

export default function Layout(props: { children: React.ReactNode }) {
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
            <TopBar />
            <Modal />
          </ScreenSizeContext>

          <div id={layoutStyles.mainContentWrapper}>
            {props.children}
            <Footer />
          </div>
        </ShopifyContext>
      </main>
    </div>
  );
}
