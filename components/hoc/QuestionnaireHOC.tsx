import React from "react";
import {Grid} from "@material-ui/core";
import SideNav from "../Layout/SideNav";
import {AppProps} from "next/app";

interface SideNavProps {
    underline: number
}
type QuestionnaireHocProps = Pick<AppProps, "Component" | "pageProps"> & SideNavProps;

const QuestionnaireHoc: React.FC<QuestionnaireHocProps> = ({
                                                                          Component,
                                                                          pageProps,
                                                                          underline
                                                                      }) => {
    return (
        <Grid container direction="row">
            <Grid item>
                <SideNav underline={underline}/>
            </Grid>
            <Grid item>
                <Component {...pageProps}/>
            </Grid>
        </Grid>
    );
};

export default QuestionnaireHoc;