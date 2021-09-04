import {reducer as questionsReducer} from "./questions";
import {combineReducers} from "redux";
export const rootReducer = combineReducers({
    questions: questionsReducer
})