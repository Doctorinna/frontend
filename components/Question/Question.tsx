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
} from "@material-ui/core";
import classes from "./Question.module.scss";

interface QuestionProps {
    variants: string[],
    id: number
}

const Question:React.FC<QuestionProps> = (props) => {
    const [value, setValue] = useState("");
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} direction={"column"}>
            <Grid item className={classes.Question} xs={6}>
                <Card>
                    <CardContent>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e)=>{setValue(e.target.value)}}>
                                {props.variants.map(el=>(
                                    <FormControlLabel key={el} value={el} control={<Radio />} label={el} />
                                ))}
                            </RadioGroup>
                        </FormControl>

                    </CardContent>
                    <CardActions>
                        <p>{value}</p>
                        <Button>Click</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Question;