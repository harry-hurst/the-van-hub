import Head from "next/head";
import TopBar from "../Header/TopBar";
import NavBar from "../Header/NavBar";

// import Footer from "../Footer";

import layoutStyles from "./Layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div id={layoutStyles.layoutContainer}>
      <Head>
        <title>The Van Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <TopBar />
        <NavBar />
      </header>
      <main>{props.children}</main>
      {/* <footer>
          <Footer />
        </footer> */}
    </div>
  );
}
