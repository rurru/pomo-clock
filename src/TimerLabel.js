import React from 'react';
import "./Timer.css";


const TimerLabel = (props) => {
    return (
        <div id = "timer-label">
            {props.session ? "Session" : "Break"}
        </div>
    );
}

export default TimerLabel;