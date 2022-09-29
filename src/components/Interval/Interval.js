import React from "react";
import "./Interval.css";
const Interval = ({ interval, handleBreakTime }) => {
    return (
        <div>
            <button className="interval-btn" onClick={() => handleBreakTime(interval.num)}>
                <p>{interval.num}</p>
            </button>
        </div>
    );
};

export default Interval;
