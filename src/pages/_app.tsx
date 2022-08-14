import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../redux/store";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
    useEffect(() => console.log("Key: " + process.env.apiKey), []);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default App;