import React, {useEffect} from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import QuestionnaireHoc from "../../components/hoc/QuestionnaireHOC";
import {AnswerType} from "../../redux/types/questions";
import TopNav from "../../components/Layout/TopNav";
import Question from "../../components/Question/Question";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useRouter} from "next/router";

const QuestionPage: React.FC = () => {
    const {fetchQuestions, saveAnswers, fetchCategories, postAnswers, fetchResults} = useActions();
    const {query, push} = useRouter();
    const id = Number(query.id);
    const state = useTypedSelector(state => state.questions);
    useEffect(() => {
        if (state.categories.length === 0) fetchCategories();
    }, []);
    useEffect(() => {
        fetchQuestions(state.categories[id]?.title);
    }, [state.categories, id]);
    const questions = state.questions;
    let answers: AnswerType[] = questions.map((q) => ({
        question: q.id.toString(),
        answer: ""
    }));
    const next = async () => {
        let ret = false;
        answers.forEach((answer, ind) => {
            if (answer.answer === "") {
                errors[ind] = true;
                ret = true;
            }
        })
        if (ret) return;
        saveAnswers(answers);
        if (id + 1 == state.categories.length) {
            postAnswers();
            fetchResults();
            push("/question/results");
        } else
            push("/question/" + (id + 1));
    };
    let errors = questions.map((q) => false);
    return (
        <QuestionnaireHoc underline={2}>
            <TopNav chosen={state.categories[id]?.title}/>
            <Box>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={8}>
                        <Grid container direction={"row"} justifyContent={"center"} p={5}>
                            {questions.map((val, ind) => (
                                <Grid item key={ind} xs={12} p={5}>
                                    <Typography component={"div"} variant={"home4"}>{val.description}</Typography>
                                    <Question question={val} answer={answers[ind]}
                                              setAns={(answer: AnswerType) => {
                                                  answers[ind] = answer;
                                              }}
                                              hasError={errors[ind]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={4} p={5}>
                        <img src="/LIFE_SUPPORT.png" alt="LIFE SUPPORT"/>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"right"} p={5}>
                    <Grid item>
                        <Button onClick={next}>Next</Button>
                    </Grid>
                </Grid>
            </Box>

        </QuestionnaireHoc>
    );
};

export default QuestionPage;