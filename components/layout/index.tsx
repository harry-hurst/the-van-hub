// styles
import layoutStyles from "./Layout.module.css";

// components
import Footer from "../Footer";
import ShopifyContextComponent from "../../context/ShopifyContextComponent";
import HeaderContextComponent from "../../context/HeaderContextComponent";
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
      </Head>

      <main>
        <ShopifyContextComponent>
          <HeaderContextComponent>
            <TopBar />
            <Modal />
          </HeaderContextComponent>

          <div id={layoutStyles.mainContentWrapper}>
            {props.children}
            <Footer />
          </div>
        </ShopifyContextComponent>
      </main>
    </div>
  );
}
