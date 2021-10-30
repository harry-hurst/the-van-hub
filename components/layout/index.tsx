import Head from "next/head";

// styles
import layoutStyles from "./Layout.module.css";

// components
import Header from "../Header";
import Footer from "../Footer";

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
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
