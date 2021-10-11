import {actionTypes} from "../types/actions";
import {
    AnswerType,
    CategoryType,
    DiseaseType,
    QuestionType,
    Recommendation,
    Statistics
} from "../types/questions";

export const actions = {
    fetchQuestions: (payload: QuestionType[]) => ({
        type: actionTypes.FETCH_QUESTIONS,
        payload
    }),
    fetchCategories: (payload: CategoryType[]) => ({
        type: actionTypes.FETCH_CATEGORIES,
        payload
    }),
    fetchDiseases: (payload: DiseaseType[]) => ({
        type: actionTypes.FETCH_DISEASES,
        payload
    }),
    saveAnswers: (payload: AnswerType[]) => ({
        type: actionTypes.SAVE_ANSWERS,
        payload
    }),
    fetchResults: (payload: Recommendation[]) => ({
        type: actionTypes.FETCH_RESULTS,
        payload
    }),
    fetchStatistics: (payload: Statistics) => ({
        type: actionTypes.FETCH_STATISTICS,
        payload
    }),
    saveToken: (payload: string) => ({
    type: actionTypes.SAVE_TOKEN,
    payload
})
}