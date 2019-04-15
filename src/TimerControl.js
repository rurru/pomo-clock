import React from 'react';

const TimerControl = (props) => {

    const controlStyle = props.text === "Pause" ? {border: '1px solid #f00'} : {};

    return (
        <div id = {props.id} style = {controlStyle} onClick = {props.controlTimer}>
            {props.text}
        </div>
    );
}

export default TimerControl;