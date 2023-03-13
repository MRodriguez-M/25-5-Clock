import React from "react";

const Timer = (props) => {
    return (
        <div id="timer-container">
            <p id="timer-label">{props.label}</p>
        </div>
    );
};

export default Timer;