import React from 'react';
import "./Timer.css";


const TimerLabel = (props) => {
    return (
        <div id = {props.session ? "session-label" : "break-label"}>
            {props.session ? "Session" : "Break"}
        </div>
    );
}

export default TimerLabel;