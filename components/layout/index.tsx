import Head from "next/head";

// styles
import layoutStyles from "./Layout.module.css";

// components

import Footer from "../Footer";
import ShopifyContextComponent from "../../context/ShopifyContextComponent";
import HeaderContextComponent from "../../context/HeaderContextComponent";
import TopBar from "../Header/TopBar";
import Modal from "../Header/Modal";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>The Van Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ShopifyContextComponent>
          <HeaderContextComponent>
            <TopBar />
            <Modal />
          </HeaderContextComponent>

          <div id={layoutStyles.mainContentContainer}>
            {props.children}
            <Footer />
          </div>
        </ShopifyContextComponent>
      </main>
    </>
  );
}
