// global styles for used accross all pages:
import "../styles/global.scss";
import "../styles/bootstrapCustom.scss";
// import type { AppProps } from "next/app";

// components
import Layout from "../components/layout";

// next components
import Head from "next/head";

// redux
import { Provider } from "react-redux";
import store from "../state/store";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />

        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        /> */}

        <title>The Van Hub</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F22NHNMFCL"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F22NHNMFCL', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
