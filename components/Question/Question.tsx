import React from "react";
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

const Question:React.FC = () => {
    //todo check if works
    return (
        <Grid className={classes.Question}>
            <Card>
                <CardContent>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic"/>
                        <TextField
                            error={false}
                            id="standard-select-option-1"
                            select
                            label="select-1"
                            value={null}
                            onChange={()=>()}
                            helperText="Please select your option"
                        >
                            <MenuItem key={} value={}></MenuItem>
                        </TextField>
                    </form>

                </CardContent>
                <CardActions>
                    <Button></Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Question;