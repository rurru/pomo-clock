import React from 'react';
import "./Timer.css";

const Timer = (props) => {
    return (
        <div id = "time-left">
            {props.minsLeft} : {('00' + props.secsLeft).slice(-2)}
        </div>
    );
}

export default Timer;