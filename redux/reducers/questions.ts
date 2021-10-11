import {actions, actionTypes, questionsState} from "../types/actions";

const initialState: questionsState = {
    questions: [],
    answers: [],
    results: [],
    diseases: [],
    categories: [],
    statistics: {
        country: [],
        your_region: []
    },
    token: ""
}

export const reducer = (state: questionsState = initialState, action: actions): questionsState => {
    switch (action.type) {
        case actionTypes.SAVE_TOKEN:
            return {...state, token: action.payload};
        case actionTypes.FETCH_QUESTIONS:
            return {...state, questions: action.payload};
        case actionTypes.FETCH_CATEGORIES:
            return {...state, categories: action.payload};
        case actionTypes.FETCH_DISEASES:
            return {...state, diseases: action.payload};
        case actionTypes.FETCH_RESULTS:
            return {...state, results: action.payload};
        case actionTypes.FETCH_STATISTICS:
            return {...state, statistics: action.payload};
        case actionTypes.SAVE_ANSWERS:
            const answers = state.answers.concat(action.payload);
            return {...state, answers: answers};
        default:
            return state;
    }
}