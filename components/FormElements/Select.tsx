import React from "react";
import {TextField} from "@material-ui/core";
import { MenuItem } from "material-ui";

interface SelectProps {
    options: string[],
    value: string,
    handleValue: ()=>void
}

const Select:React.FC<SelectProps> = ({options, value, handleValue}) => {
    return (
        <TextField helperText="Please select answer"
                   select label="select" color="secondary"
                   value={value} onChange={handleValue}>
            {options.map((val, ind)=>(
                <MenuItem key={ind} value={val}>{val}</MenuItem>
            ))}
        </TextField>
    );
};

export default Select;