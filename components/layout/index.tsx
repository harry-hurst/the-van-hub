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
    // <body> ---> <div id="__next"> --->
    <>
      <Head>
        <title>The Van Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div id={layoutStyles.mainContentContainer}>
          {props.children}
          <Footer />
        </div>
      </main>
    </>
  );
}
