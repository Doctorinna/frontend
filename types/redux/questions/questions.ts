export interface questionsState {
    questions: any[]
}

export enum actionTypes {
    FETCH_QUESTIONS = "FETCH_QUESTIONS"
}

interface fetchQuestionsAction {
    type: actionTypes.FETCH_QUESTIONS,
    payload: any
}


export type actions = fetchQuestionsAction // | new actions