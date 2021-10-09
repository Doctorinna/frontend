import React from "react";
import QuestionnaireHoc from "../../components/hoc/QuestionnaireHOC";
import ResultsComponent from "../../components/Question/Results";
const Results:React.FC = () => {
    return (
        <QuestionnaireHoc underline={3}>
            <ResultsComponent/>
        </QuestionnaireHoc>
    );
};

export default Results;