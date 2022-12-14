import React, { useEffect, useState } from "react";
import "./Summary.css";
import myPic from "../../my-pic.jpg";
import Interval from "../Interval/Interval";
import { addIntervalToLocalDb, getStoredTime } from "../../utilities/utilities";
import { ToastContainer } from "react-toastify";
const Summary = (props) => {
  const { timeTaken, notify } = props;
  /* Get Breaktime state */
  const [breaks, setBreaks] = useState([]);

  /* handle Breaktime State */
  const [intervalTime, setintervalTime] = useState(0);

  useEffect(() => {
    fetch("breaktime.json")
      .then((res) => res.json())
      .then((data) => setBreaks(data));
  }, []);

  useEffect(() => {
    const storedTime = getStoredTime("Break");
    let savedTime = 0;
    for (const id in storedTime) {
      savedTime = savedTime + storedTime[id];
    }
    setintervalTime(savedTime);
  }, [breaks]);

  const handleBreakTime = (interval) => {
    setintervalTime(interval.num);
    addIntervalToLocalDb("Break", interval.id, interval.num);
  };
  return (
    <div className="summary">
      <div className="personalInfo">
        <div className="intro">
          <img src={myPic} alt="" />
          <div>
            <h3>Kazi Rahat Rezwan</h3>
            <small>Reactjs Developer</small>
          </div>
        </div>
        <div className="more-info common">
          <div>
            <h3>75kg</h3>
            <p>
              <small>Weight</small>
            </p>
          </div>
          <div>
            <h3>5.8</h3>
            <p>
              <small>Height</small>
            </p>
          </div>
          <div>
            <h3>25yrs</h3>
            <p>
              <small>Age</small>
            </p>
          </div>
        </div>
      </div>

      {/* BreakTime Section */}
      <div className="breakTime">
        <h3>Take A Break</h3>
        <div className="break-div common">
          {breaks.map((interval) => (
            <Interval
              key={interval.id}
              interval={interval}
              handleBreakTime={handleBreakTime}
            ></Interval>
          ))}
        </div>
      </div>

      {/* Exercise Details Section */}
      <div className="exerciseDetails">
        <h3>Exercise Details</h3>
        <div className="common exercise-time">
          <h3>Exercise Time</h3>
          <p>{timeTaken} Minutes</p>
        </div>
        <div className="common exercise-time">
          <h3>Break Time</h3>
          <p>{intervalTime} Minutes</p>
        </div>
      </div>

      <div className="activity-btn-div">
        <button onClick={notify} className="activity-btn">
          Activity Complete
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Summary;
