import React from "react";
import Question from "../components/Question/Question";

const Questions: React.FC = () => {
    return (
        <div>
            <Question variants={["asd", "qwe"]} id={0}/>
        </div>
    );
};

export default Questions;