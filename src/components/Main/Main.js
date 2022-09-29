import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Summary from "../Summary/Summary";
import "./Main.css";

const Main = () => {
    /* create state for fetching exercise */
    const [exercises, setExercises] = useState([]);

    /* State for exercisetime */
    const [timeTaken, setTimeTaken] = useState(0);
    useEffect(() => {
        fetch("exercise.json")
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);

    const handleAddToList = (currentExercise) => {
        const time = currentExercise.time;
        setTimeTaken(timeTaken + time);
    };
    return (
        <div className="main-container">
            <div className="exercise-container">
                <h2>Select Your Exercise</h2>
                <div className="exercise-div">
                    {exercises.map((exercise) => (
                        <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        ></Exercise>
                    ))}
                </div>
            </div>
            <div className="summary-div">
                <Summary timeTaken={timeTaken}></Summary>
            </div>
        </div>
    );
};

export default Main;
