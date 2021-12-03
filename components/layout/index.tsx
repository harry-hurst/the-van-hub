// styles
import layoutStyles from "./Layout.module.css";

// components
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

import TopBar from "../Header/TopBar";
import Modal from "../Header/Modal";

import Footer from "../Footer";

// next components
import Head from "next/head";

// modules
import { AnimateSharedLayout } from "framer-motion";

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
            <AnimateSharedLayout>
              {props.children}
              <Footer />
            </AnimateSharedLayout>
          </div>
        </ShopifyContext>
      </main>
    </div>
  );
}
