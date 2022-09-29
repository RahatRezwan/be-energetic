import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
    console.log(exercise);
    const { img, name, details, time, Age } = exercise;
    return (
        <div className="exercise">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{details}</p>
            <p>{time}</p>
            <p>For Age: {Age}</p>
        </div>
    );
};

export default Exercise;
