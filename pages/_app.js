// global styles apply to all pages:
import "../styles/global.scss";
import "../styles/bootstrapCustom.scss";

// components
import Layout from "../components/layout";

// next components
import Head from "next/head";

// redux
import { Provider } from "react-redux";
import store from "../state/store";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />

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

      {/* Provider from react-redux wraps entire app to provide 'store': */}
      <Provider store={store}>
        {/* Layout component includes header (navigation) and footer for app: */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

export default App;
