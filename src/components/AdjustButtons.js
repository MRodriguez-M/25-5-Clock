import React from "react";

const AdjustButtons = (props) => {
    return (
        <p id={`${props.label}-label`}>{props.label} Length</p>
    );
};

export default AdjustButtons;