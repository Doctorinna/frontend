import React, {useState} from "react";
import {
    Card,
    CardContent,
    Grid,
    Button,
    CardActions,
    TextField,
    MenuItem,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import classes from "./Question.module.scss";
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import Slider from "../FormElements/Slider";

import {QuestionType} from "../../redux/types";

interface QuestionProps {
    question: QuestionType
}

const Question: React.FC<QuestionProps> = ({question}) => {
    const [value, setValue] = useState("");
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} direction={"column"}>
            <Grid item className={classes.Question} xs={6}>
                <FormControl component="fieldset">

                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }}>
                        {question.options.map(el => (
                            <FormControlLabel key={el.id} value={el.answer} control={<Radio/>} label={el.answer}/>
                        ))}
                    </RadioGroup>
                </FormControl>
        </Grid>
</Grid>
)
    ;
};

export default Question;