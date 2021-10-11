import React from "react";
import {Slider} from "@mui/material";

interface scoreSliderProps {
    value: number//between 0 and 1
}
const ScoreSlider: React.FC<scoreSliderProps> = ({value}) => {
    const valueText = (val: number) => {
        const rounded = Math.round(val*1000);
        return rounded/10 + "%";
    }
    const N = 10;
    const marks = Array.from({length: N}, (v, k) => (k+1)*10).map(val => ({value: val, label:val}));
    return (
        <Slider
            disabled
            aria-label="Always visible"
            defaultValue={value*100}
            getAriaValueText={valueText}
            marks={marks}
            max={100}
            min={0}
            valueLabelDisplay="on"
        />
    );
};

export default ScoreSlider;