// styles
import "../styles/global.scss";
import type { AppProps } from "next/app";

// components
import Layout from "../components/layout";

// redux
import { Provider } from "react-redux";
import store from "../state/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
