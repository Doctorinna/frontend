import React from "react";
import {Grid, Typography} from "@material-ui/core";
import Link from "next/link";

const Index = () => {
    return (
        <Grid container justifyContent={"center"}>
            <Grid>
                <Typography variant={"body1"}>Do you want to know your risk factor?</Typography>
                <Typography variant={"body1"}>Answer our questions and learn it!</Typography>
                <Link href={"/questions"}>
                    <a>Click here!
                    </a>
                </Link>
            </Grid>
            <Grid>
            </Grid>
        </Grid>
    );
};

export default Index;