import React from "react";
import Input from "../../components/FormElements/Input";
import Select from "../../components/FormElements/Select";
import Slider from "../../components/FormElements/Slider";
import {Grid} from "@material-ui/core";

const Question: React.FC = () => {

    //todo take from redux and apply component
    //todo html
    const questions = [];
    return (
        <Grid container direction={"column"} alignItems="center">
            {questions.map((val, ind)=>(
                <Grid item key={ind}>
                    {}
                </Grid>
            ))}
        </Grid>
    );
};

export default Question;