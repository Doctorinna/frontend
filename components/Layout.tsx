import React from "react";
import Navigation from "./Navigation";
import {Container, Grid} from "@material-ui/core";


const Layout: React.FC = (props) => {
    return (
        <React.Fragment>
            <Navigation/>
            <Container>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid xs={12}>{props.children}</Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Layout;