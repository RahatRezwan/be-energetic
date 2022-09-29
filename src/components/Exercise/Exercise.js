import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
    console.log(exercise);
    const { img, name, details, time, Age } = exercise;
    return (
        <div className="exercise">
            <div className="cover">
                <img src={img} alt="" />
                <div className="overlay">
                    <h4 className="overlay-text">{name}</h4>
                </div>
            </div>
            <div className="exercise-info">
                <h3>{name}</h3>
                <div className="text-ellipsis">
                    <p>{details}</p>
                </div>
                <p>
                    For Age: <strong>{Age}</strong>
                </p>
                <p>
                    Time Taken: <strong>{time} minutes</strong>
                </p>
            </div>
            <div className="exercise-btn">
                <button className="addToList-btn">
                    <p>Add to List</p>
                </button>
            </div>
        </div>
    );
};

export default Exercise;
