import React from "react";
import QuestionnaireHoc from "../../components/hoc/QuestionnaireHOC";
import ResultsComponent from "../../components/Question/Results";
const Results:React.FC = () => {
    return (
        <QuestionnaireHoc Component={ResultsComponent} pageProps={{}} underline={3}/>
    );
};

export default Results;