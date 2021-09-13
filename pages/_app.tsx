import "../styles/globals.css"
import type {AppProps} from "next/app"
import Layout from "../components/Layout";
import React from "react";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import "../styles/Router.module.scss";

function MyApp({Component, pageProps, router}: AppProps) {
    //todo check if animation works
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={router.pathname} classNames="page" timeout={300} unmountOnExit mountOnEnter>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CSSTransition>
        </SwitchTransition>

    )
}

export default MyApp
