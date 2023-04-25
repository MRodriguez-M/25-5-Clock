import AdjustButtons from "./AdjustButtons";
import Timer from "./Timer";
import { useState, useEffect } from 'react';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(true);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [currentTimer, setCurrentTimer] = useState("Session");

  const setTime = () => {
    if(seconds == 0) {
      if(minutes != 0) {
        setSeconds(59);
        setMinutes((prevMin) => prevMin - 1);
      }
    }
    else {
      setSeconds((prevSec) => prevSec - 1);
    }
  };

  const handleClickStartStop = () => {
    if(paused == true) {
      setPaused(false);
    }
    else {
      setPaused(true);
    }
  };

  const handleClickReset = () => {
    if(currentTimer == "Break") {
      setCurrentTimer("Session");
    }

    setMinutes(25);
    setSeconds(0);
    setSessionLength(25);
    setBreakLength(5);
  };

  const handleClickIncrement = (event) => {
    if(paused == true) {
      if(event.currentTarget.id == "Session-increment" && sessionLength < 60) {
        setSessionLength((prevLen) => prevLen + 1);
        if(currentTimer == "Session") {
          setMinutes(sessionLength + 1);
          setSeconds(0);
        }
      }
      if(event.currentTarget.id == "Break-increment" && breakLength < 60) {
        setBreakLength((prevLen) => prevLen + 1);
        if(currentTimer == "Break") {
          setMinutes(breakLength + 1);
          setSeconds(0);
        }
      }
    }
  };

  const handleClickDecrement = (event) => {
    if(paused == true) {
      if(event.currentTarget.id == "Session-decrement" && sessionLength > 1) {
        setSessionLength((prevLen) => prevLen - 1);
        if(currentTimer == "Session") {
          setMinutes(sessionLength - 1);
          setSeconds(0);
        }
      }
      if(event.currentTarget.id == "Break-decrement" && breakLength > 1) {
        setBreakLength((prevLen) => prevLen - 1);
        if(currentTimer == "Break") {
          setMinutes(breakLength - 1);
          setSeconds(0);
        }
      }
    }
  };

  useEffect(() => {
    if(paused != true) {
      const interval = setInterval(setTime, 1000);
      
      if(minutes == 0 && seconds == 0) {
        if(currentTimer == "Session") {
          setCurrentTimer("Break");
          setMinutes(breakLength);
        }
        else {
          setCurrentTimer("Session");
          setMinutes(sessionLength);
        }
      }
    
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, paused]);

  return (
    <div id="main-container">
      <AdjustButtons label="Break" length={breakLength} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
      <AdjustButtons label="Session" length={sessionLength} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
      <Timer label={currentTimer} minutes={minutes} seconds={seconds} handleClickStartStop={handleClickStartStop} handleClickReset={handleClickReset} />
    </div>
  );
}

export default App;