import React from 'react';

const MIN = 0;
const MAX = 60;

const Options = (props) => {
    return (
        <div className =  "options">
            <div id = {props.name + "-label"}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1) + " Length"}
            </div>
            <div id = {props.name + "-length"}>
                {props.value}
            </div>
            <div class = "adjustment">
                <i class="fas fa-arrow-up" id = {props.name + "-increment"} 
                    onClick = {props.value < MAX ? (e) => props.changeLength(props.name, props.value + 1) : ""}></i>
                <i class="fas fa-arrow-down" id = {props.name + "-decrement"}
                   onClick = {props.value > MIN ? (e) => props.changeLength(props.name, props.value - 1) : ""}></i>
            </div>
        </div>
    );
}

export default Options;