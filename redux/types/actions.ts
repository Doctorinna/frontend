import {QuestionType, AnswerType, DiseaseType, CategoryType, Recommendation, Statistics} from "./questions";

export interface questionsState {
    questions: QuestionType[],
    answers: AnswerType[],
    diseases: DiseaseType[],
    categories: CategoryType[],
    results: Recommendation[],
    statistics: Statistics,
    token: string
}

export enum actionTypes {
    FETCH_QUESTIONS = "FETCH_QUESTIONS",
    SAVE_ANSWERS = "SAVE_ANSWERS",
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_DISEASES = "FETCH_DISEASES",
    FETCH_RESULTS = "FETCH_RESULTS",
    FETCH_STATISTICS = "FETCH_STATISTICS",
    SAVE_TOKEN = "SAVE_TOKEN"
}

interface fetchQuestionsAction {
    type: actionTypes.FETCH_QUESTIONS,
    payload: QuestionType[]
}

interface fetchStatisticsAction {
    type: actionTypes.FETCH_STATISTICS,
    payload: Statistics
}

interface saveAnswersAction {
    type: actionTypes.SAVE_ANSWERS,
    payload: AnswerType[]
}

interface fetchCategoriesAction {
    type: actionTypes.FETCH_CATEGORIES,
    payload: CategoryType[]
}
interface fetchDiseasesAction {
    type: actionTypes.FETCH_DISEASES,
    payload: DiseaseType[]
}
interface fetchResultsAction {
    type: actionTypes.FETCH_RESULTS,
    payload: Recommendation[]
}
interface saveTokenAction {
    type: actionTypes.SAVE_TOKEN,
    payload: string
}

export type actions = fetchQuestionsAction |
    saveAnswersAction |
    fetchDiseasesAction |
    fetchCategoriesAction |
    fetchResultsAction |
    fetchStatisticsAction |
    saveTokenAction;