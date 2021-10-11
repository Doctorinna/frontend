import "../styles/globals.css";
import type {AppProps} from "next/app";
import Layout from "../components/Layout/Layout";
import React from "react";
import PageTransition from "../components/PageTransition";
import {wrapper} from "../redux/store";
import {ThemeProvider} from "@mui/material";
import {THEME} from "../styles/theme/theme";

function MyApp({Component, pageProps, router}: AppProps) {
    console.warn = () => {};
    return (
            <ThemeProvider theme={THEME}>
                <Layout>
                    <PageTransition location={router.pathname}>
                        <Component {...pageProps}/>
                    </PageTransition>
                </Layout>
            </ThemeProvider>
    )
}

export default wrapper.withRedux(MyApp);
