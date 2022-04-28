import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import reduxStore from "../redux/store";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={reduxStore}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default App;