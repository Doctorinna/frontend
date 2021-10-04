const urls = {
    HOST: "http://localhost",
    PORT: "8000",
    mappings: {
        API: "api",
        RISKS: "risks",
        DISEASES: "diseases",
        QUESTIONS: "questions",
        RESPONSES: "response"
    }
}
const getAllQuestions = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.QUESTIONS}/`;
const getAllDiseases = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.DISEASES}/`;
const sendAnswers = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.RESPONSES}/`;

export default {getAllDiseases, getAllQuestions, sendAnswers};