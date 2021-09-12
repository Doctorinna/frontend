import React from "react";
import {Card, Grid} from "@material-ui/core";
import classes from "./Question.module.scss";

const Question:React.FC = () => {
    //todo check if works
    return (
        <Grid className={classes.Question}>
            <Card>

            </Card>
        </Grid>
    );
};

export default Question;