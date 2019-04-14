import React from 'react';
import "./Timer.css";

const Timer = (props) => {
    return (
        <div id = "time-left">
            {props.timeLeft / 60} : {props.timeLeft % 60}
        </div>
    );
}

export default Timer;