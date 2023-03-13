import React from "react";

const AdjustButtons = (props) => {
    return (
        <div id="container">
            <p id={`${props.label}-label`}>{props.label} Length</p>
            <button id={`${props.label}-decrement`}>-</button>
            <p id={`${props.label}-length`}>{props.length}</p>
            <button id={`${props.label}-increment`}>+</button>
        </div>
    );
};

export default AdjustButtons;