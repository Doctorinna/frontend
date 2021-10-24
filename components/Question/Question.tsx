import React, {useEffect, useState} from "react";
import {
    SelectChangeEvent,
    Box
} from "@mui/material";
import Select from "../FormElements/Select";
import Slider from "../FormElements/Slider";
import {AnswerType, QuestionType} from "../../redux/types/questions";

interface QuestionProps {
    question: QuestionType,
    answer: AnswerType,
    setAns: (answer: AnswerType) => void,
    hasError: boolean
}

const Question: React.FC<QuestionProps> = ({question, answer, setAns, hasError}) => {
    let elementType: JSX.Element | null = null;
    useEffect(() => {
        if (question.range) {
            const max = question.range.max;
            const min = question.range.min;
            setAns({...answer, answer: Math.round((min+max)/2).toString()});
            const [value, setValue] = useState(Math.round((min+max)/2));
            let oldValue : number;
            elementType = <Slider max={max}
                                  min={min}
                                  value={value}
                                  handler={
                                      (e: Event, val: number | number[]) => {
                                          setValue(val as number);
                                          setAns({...answer, answer: (val as number).toString()})
                                      }
                                  }
                                  optionHandler={
                                      (checked: boolean) => {
                                          if(checked){
                                              oldValue = value;
                                              setAns({...answer, answer:question.options[0].answer});
                                          }
                                          else setAns({...answer, answer:oldValue.toString()});
                                      }
                                  }
                                  options={question.options}/>
        }
        else {
            const [value, setValue] = useState(question.options[0].answer);
            setAns({...answer, answer: question.options[0].answer});
            elementType = <Select options={question.options} hasError={hasError}
                                  value={value}
                                  handleValue={(e: SelectChangeEvent) => {
                                      setValue(e.target.value as string);
                                      setAns({...answer, answer: e.target.value as string});
                                  }}/>;
        }
    }, [question]);
    return (
        <Box sx={{}}>
            {elementType}
        </Box>
    )
        ;
};
export default Question;