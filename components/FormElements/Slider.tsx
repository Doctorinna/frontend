import React, {useState} from "react";
import {Box, Checkbox, FormControlLabel, Slider as Slid} from "@mui/material";
import {Option} from "../../redux/types/questions";

interface sliderProps {
    max: number;
    min: number;
    value: number;
    handler: (e: Event, val: number | number[]) => void;
    options: Option[];
    optionHandler: (checked: boolean) => void
}

const Slider: React.FC<sliderProps> = ({optionHandler, max, min, value, handler, options}) => {
    const [dis, setDis] = useState(false);
    const N = 5;
    const marks = Array.from({length: N + 1}, (v, k) => Math.round(min + (max - min) * k / N)).map(val => ({
        value: val,
        label: val.toString()
    }));
    return (
        <Box>
            <Slid
                sx={{
                    "&.MuiSlider-mark": {
                        display:"none",
                        backgroundColor: "#9592FE",
                        height: 2,
                        width: 1,
                        "&.MuiSlider-markActive": {
                            opacity: 1,
                            backgroundColor: "#35329E",
                        }
                    }
                }}
                value={value}
                onChange={handler}
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={min}
                max={max}
                color="secondary"
                disabled={dis}
            />
            {options[0] ?
                <FormControlLabel control={
                    <Checkbox checked={dis}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  setDis(e.target.checked);
                                  optionHandler(e.target.checked);
                              }}
                              inputProps={{"aria-label": "controlled"}}/>} label={options[0].answer}/>
                : null}
        </Box>
    );
};

export default Slider;