import "../styles/globals.css"
import type {AppProps} from "next/app"
import Layout from "../components/Layout/Layout";
import React from "react";
import PageTransition from "../components/PageTransition";
import {wrapper} from "../redux/store";

function MyApp({Component, pageProps, router}: AppProps) {

    return (
        <Layout>
            <PageTransition location={router.pathname}>
                    <Component {...pageProps}/>
            </PageTransition>
        </Layout>
    )
}

export default wrapper.withRedux(MyApp);
