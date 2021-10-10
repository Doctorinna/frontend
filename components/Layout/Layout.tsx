import React from "react";
import {Box} from "@mui/material";
import classes from "./Layout.module.scss";

const Layout: React.FC = (props) => {
    return (
        <Box className={classes.Container}>
            <Box className={classes.Box}>
                {props.children}
            </Box>
        </Box>
    );
};

export default Layout;