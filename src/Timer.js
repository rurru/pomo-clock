import React from 'react';
import "./Timer.css";

const Timer = (props) => {

    return (
        <div id = "time-left">
            {('00' + props.minsLeft).slice(-2)}:{('00' + props.secsLeft).slice(-2)}
            <audio id = "beep" src = "http://robinpreibisi.us/fcc/pomo-clock/squeeze-toy.mp3" />
        </div>
    );
}

export default Timer;