import React from "react";
import {Slider as Slid} from "@material-ui/core";


//todo check if max/min is needed in this component
const Slider:React.FC = () => {
    const N = 8;
    const marks = Array.from({length: N}, (v, k) => k+1).map(val=>({value: val, label:val}));
    return (
        <Slid
              defaultValue={5}
              valueLabelDisplay="auto"
              step={1}
              marks={marks}
              min={1}
              max={8}
              color="secondary"
        />
    );
};

export default Slider;