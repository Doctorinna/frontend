const urls = {
    HOST: "http://18.216.235.168",
    PORT: "8000",
    mappings: {
        API: "api",
        RISKS: "risks",
        DISEASES: "diseases",
        QUESTIONS: "questions",
        RESPONSES: "response",
        CATEGORIES: "categories",

    }
}
const getQuestions = (category: string) =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.QUESTIONS}/${category}`;
const getAllDiseases = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.DISEASES}`;
const getAllCategories = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.CATEGORIES}`;
const sendAnswers = () =>
    `${urls.HOST}:${urls.PORT}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.RESPONSES}`;

export default {getAllDiseases, getQuestions, sendAnswers};