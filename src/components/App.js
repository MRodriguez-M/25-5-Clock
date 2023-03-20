import AdjustButtons from "./AdjustButtons";
import Timer from "./Timer";
import { useState, useEffect } from 'react';

const buttonData = [
  {"label": "Break", "length": 5},
  {"label": "Session", "length": 25}  
]

function App() {
  const [minutes, setMinutes] = useState(buttonData[1].length);
  const [seconds, setSeconds] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(setTime, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <>
      {buttonData.map(({label, length}) => 
        <AdjustButtons key={label} label={label} length={length} />
      )}
      <Timer label={buttonData[1].label} minutes={minutes} seconds={seconds} />
    </>
  );
}

export default App;