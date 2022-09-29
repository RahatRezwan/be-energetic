import React, { useEffect, useState } from "react";
import { addToLocalDb, getStoredTime } from "../../utilities/utilities";
import Exercise from "../Exercise/Exercise";
import Questions from "../Questions/Questions";
import Summary from "../Summary/Summary";
import "./Main.css";

const Main = () => {
    /* create state for fetching exercise */
    const [exercises, setExercises] = useState([]);
    /* State for exercisetime */
    const [timeTaken, setTimeTaken] = useState(0);
    /* State for question */
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("exercise.json")
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);

    /* useeffect for question */
    useEffect(() => {
        fetch("questions.json")
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        const storedTime = getStoredTime("exercise");
        let savedTime = 0;
        for (const id in storedTime) {
            savedTime = savedTime + storedTime[id];
        }
        setTimeTaken(savedTime);
    }, [exercises]);

    const handleAddToList = (currentExercise) => {
        const time = currentExercise.time;
        setTimeTaken(timeTaken + time);
        addToLocalDb("exercise", currentExercise.id, timeTaken);
    };
    return (
        <div className="main-section">
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
            <div className="que-container">
                {questions.map((que) => (
                    <Questions key={que.id} que={que}></Questions>
                ))}
            </div>
        </div>
    );
};

export default Main;
