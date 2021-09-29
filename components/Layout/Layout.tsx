import React from "react";
import Navigation from "../Navigation/Navigation";
import {Box} from "@material-ui/core";
import classes from "./Layout.module.scss";

const Layout: React.FC = (props) => {
    return (
        <Box className={classes.Container}>
            <Navigation/>
            <Box className={classes.Box}>
                {props.children}
            </Box>
        </Box>
    );
};

export default Layout;