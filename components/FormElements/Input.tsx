import React from "react";
import {TextField} from "@mui/material";

interface InputProps {
    value: string,
    handleValue: ()=>void
}

const Input:React.FC<InputProps> = ({value, handleValue}) => {
    return (
        <TextField label="Input Answer" variant="outlined" color="secondary" value={value} onChange={handleValue}/>
    );
};

export default Input;