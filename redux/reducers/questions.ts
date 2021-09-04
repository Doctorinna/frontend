import {actions, actionTypes, questionsState} from "../../types/redux/questions/questions";

const initialState: questionsState = {
    questions: []
}

export const reducer = (state:questionsState = initialState, action: actions) => {
    switch (action.type){
        case actionTypes.FETCH_QUESTIONS:
            return {...state, questions: action.payload};//todo
        default:
            return state;
    }
}