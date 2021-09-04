import React from "react";
import Link from "next/link";
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import classes from "../styles/Navigation.module.scss";
const Navigation = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/">
                            <a>Root</a>
                        </Link>
                        <Link href="/questions">
                            <a>Questions</a>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;