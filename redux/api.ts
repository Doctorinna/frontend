const urls = {
    HOST: "http://18.216.235.168",
    mappings: {
        API: "api",
        RISKS: "risks",
        DISEASES: "diseases",
        QUESTIONS: "questions",
        RESPONSE: "response",
        CATEGORIES: "categories",
        RESULT: "result",
        STATISTICS: "statistics"
    }
}
const getQuestions = (category: string) =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.QUESTIONS}/${category}`;
const getAllDiseases = () =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.DISEASES}`;
const getAllCategories = () =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.CATEGORIES}/`;
const sendAnswers = () =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.RESPONSE}/`;
const getResults = (token: string) =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.RESULT}/${token}/__all__`;
const getStatistics = (illness: string, token: string) =>
    `${urls.HOST}/${urls.mappings.API}/${urls.mappings.RISKS}/${urls.mappings.RESULT}/${urls.mappings.STATISTICS}/${token}/${illness}`;

export {getAllDiseases, getQuestions, sendAnswers, getAllCategories, getResults, getStatistics};