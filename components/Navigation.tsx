import React from "react";
import Link from "next/link";
import {AppBar, Toolbar, IconButton, Typography, Grid, Box} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import classes from "../styles/Navigation.module.scss";
import {nav} from "../router/nav";

const Navigation = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant={"dense"}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Grid container justifyContent={"flex-start"}>
                        {nav.map((el, ind) => (
                            <Box px={2} key={ind}>
                                <Typography variant="h6" className={classes.title}>
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