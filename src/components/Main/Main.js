import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Main.css";

const Main = () => {
    /* create state for fetching exercise */
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch("exercise.json")
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);
    return (
        <div>
            <div>
                {exercises.map((exercise) => (
                    <Exercise key={exercise.id} exercise={exercise}></Exercise>
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default Main;
