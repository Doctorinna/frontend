import React from "react";
import {Box, Button, Grid} from "@mui/material";
import QuestionnaireHoc from "../../components/hoc/QuestionnaireHOC";
import {QuestionType} from "../../redux/types";
import TopNav from "../../components/Layout/TopNav";
import Question from "../../components/Question/Question";

const QuestionPage: React.FC = () => {

    //todo take from redux and apply component
    //todo html
    const questions: QuestionType[] = [
        {
            "id": 1,
            "description": "How often do you smoke?",
            "range": [],
            "class": "Habits",
            "options": [
                {
                    "id": 1,
                    "answer": "Don't smoke"
                },
                {
                    "id": 2,
                    "answer": "Less than 10 cigaretts per day"
                },
                {
                    "id": 3,
                    "answer": "Less than 20 ciggaretts per day"
                }
            ]
        },
        {
            "id": 2,
            "description": "What is quality of air in your city?",
            "class": "Breath",
            "range": [
                {
                    "id": 1,
                    "min": 0,
                    "max": 10
                }
            ],
            "options": []
        }
    ];
    return (
        <QuestionnaireHoc underline={2}>
                <TopNav chosen={"Personal"}/>
            <Box>
                <Grid container direction={"row"}>
                    <Grid item>
                        <Grid container direction={"column"} alignItems={"center"}>
                            {questions.map((val, ind) => (
                                <Grid item key={ind}>
                                    <Question question={val}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img src="" alt="question"/>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"right"} p={5}>
                    <Grid item>
                        <Button>Next</Button>
                    </Grid>
                </Grid>
            </Box>

        </QuestionnaireHoc>
    );
};

export default QuestionPage;