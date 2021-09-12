import React from "react";
import Link from "next/link";
import {AppBar, Toolbar, IconButton, Typography, Grid, Box} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import {nav} from "../../router/nav";
import classes from "./Navigation.module.scss";

const Navigation = () => {
    //todo check if classname works
    //check if 100px is enough
    return (
        <div>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar variant={"dense"}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Grid container justifyContent={"flex-start"}>
                        {nav.map((el, ind) => (
                            <Box mx={3} key={ind}>
                                <Typography variant="h5">
                                    <Link href={el.path}>
                                        <a>{el.name}
                                        </a>
                                    </Link>
                                </Typography>
                            </Box>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;