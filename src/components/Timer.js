import React from "react";

const Timer = (props) => {
    return (
        <div id="timer-container">
            <p id="timer-label">{props.label}</p>
            <div id="time-left">{props.minutes}:{props.seconds}</div>
        </div>
    );
};

export default Timer;