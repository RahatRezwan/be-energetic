import React from "react";
import "./Questions.css";
const Questions = ({ que }) => {
    return (
        <div className="que-div">
            <h1>{que.question}</h1>
            <p>{que.answer}</p>
        </div>
    );
};

export default Questions;
