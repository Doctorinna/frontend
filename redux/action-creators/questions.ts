import {Dispatch} from "redux";
import axios from "axios";
import {getAllDiseases, getQuestions, getAllCategories, getResults, sendAnswers, getStatistics} from "../api";
import {
    AnswerType,
    CategoryType,
    DiseaseType,
    QuestionType,
    Recommendation,
    Statistics
} from "../types/questions";
import {actions} from "../actions/questions";
import {RootState} from "../reducers";

export const fetchQuestions = (category: string) => async (dispatch: Dispatch) => {
    if(category == undefined)return;
    try {
        return await axios.get<QuestionType[]>(getQuestions(category)).then(response => {
                dispatch(actions.fetchQuestions(response.data));
            }
        );
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const fetchDiseases = () => async (dispatch: Dispatch) => {
    try {
        return await axios.get<DiseaseType[]>(getAllDiseases()).then(response => {
                dispatch(actions.fetchDiseases(response.data));
            }
        );
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const fetchCategories = () => async (dispatch: Dispatch) => {
    try {
        return await axios.get<CategoryType[]>(getAllCategories()).then(response => {
                dispatch(actions.fetchCategories(response.data));
            }
        );
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const saveAnswers = (answers: AnswerType[]) => async (dispatch: Dispatch) => {
    try {
        dispatch(actions.saveAnswers(answers));
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const fetchResults = () => async (dispatch: Dispatch) => {
    try {
        return await axios.get<Recommendation[]>(getResults()).then(response => {
            console.log(response.data);
                dispatch(actions.fetchResults(response.data));
            }
        );
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const postAnswers = () => async (dispatch: Dispatch, getState: ()=>RootState) => {
    try {
        const answers = getState().questions.answers;
        console.log(answers);
        return await axios.post(sendAnswers(), answers);
    } catch
        (e: any) {
        console.log(e.message)
    }
}
export const fetchStatistics = (illness: string) => async(dispatch: Dispatch) => {
    try {
        return await axios.get<Statistics>(getStatistics(illness)).then(response => {
            response.data
        })
    }
    catch (e: any) {
        console.log(e.message)
    }
}
