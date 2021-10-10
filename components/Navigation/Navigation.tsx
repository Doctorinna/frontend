import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Grid} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
import {nav} from "../../router/nav";
import classes from "./Navigation.module.scss";
import Link from "next/link";

const Navigation: React.FC = () => {
    return (
        <AppBar position="static" className={classes.AppBar}>
            <Toolbar variant={"dense"}>
                <Grid container direction={"row-reverse"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Grid item xs={1}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Link href="/">
                                <a>
                                    <MenuIcon/>
                                </a>
                            </Link>
                        </IconButton>
                    </Grid>
                    {nav.map((el, ind) => (
                        <Grid item key={ind} xs={1}>
                            <Typography variant="h5" key={ind}>
                                <Link href={el.path}>
                                    <a>{el.name}
                                    </a>
                                </Link>
                            </Typography>
                        </Grid>

                    ))}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;