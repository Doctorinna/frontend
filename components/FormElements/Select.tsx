import React from "react";
import {
    MenuItem,
    Select as Sel,
    FormControl,
    SelectChangeEvent,
    FormHelperText
} from "@mui/material";
import {Option} from "../../redux/types/questions";

interface SelectProps {
    options: Option[],
    value: string,
    handleValue: (e: SelectChangeEvent)=>void;
    hasError: boolean;
}

const Select:React.FC<SelectProps> = ({options, value, handleValue, hasError}) => {
    return (
        <FormControl fullWidth error={hasError}>
            <Sel
                color={"secondary"}
                value={value}
                onChange={handleValue}
                sx={{
                        borderRadius: "20px"
                }}
            >
            {options.map((opt)=>(
                <MenuItem key={opt.id} value={opt.answer}>{opt.answer}</MenuItem>
            ))}
            </Sel>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
        </FormControl>
    );
};

export default Select;