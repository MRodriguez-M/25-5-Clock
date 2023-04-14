import AdjustButtons from "./AdjustButtons";
import Timer from "./Timer";
import { useState, useEffect } from 'react';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(true);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

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
    setMinutes(25);
    setSeconds(0);
  };

  const handleClickIncrement = (event) => {
    if(event.currentTarget.id == "Session-increment" && sessionLength < 60) {
      setSessionLength((prevLen) => prevLen + 1);
    }
    if(event.currentTarget.id == "Break-increment" && breakLength < 60) {
      setBreakLength((prevLen) => prevLen + 1);
    }
  };

  const handleClickDecrement = (event) => {
    if(event.currentTarget.id == "Session-decrement" && sessionLength > 1) {
      setSessionLength((prevLen) => prevLen - 1);
    }
    if(event.currentTarget.id == "Break-decrement" && breakLength > 1) {
      setBreakLength((prevLen) => prevLen - 1);
    }
  };

  useEffect(() => {
    if(paused != true) {
      const interval = setInterval(setTime, 1000);
    
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, paused]);

  return (
    <div id="main-container">
      <AdjustButtons label="Break" length={breakLength} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
      <AdjustButtons label="Session" length={sessionLength} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
      <Timer label="Session" minutes={minutes} seconds={seconds} handleClickStartStop={handleClickStartStop} handleClickReset={handleClickReset} />
    </div>
  );
}

export default App;