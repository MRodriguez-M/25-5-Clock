import React from "react";

const Timer = (props) => {
    return (
        <div id="timer-container">
            <p id="timer-label">{props.label}</p>
            <div id="time-left">{props.minutes < 10 ? "0" + props.minutes : props.minutes}:{props.seconds < 10 ? "0" + props.seconds : props.seconds}</div>
            <button id="start_stop" onClick={props.handleClickStartStop}>play</button>
            <button id="reset" onClick={props.handleClickReset}>reset</button>
        </div>
    );
};

export default Timer;