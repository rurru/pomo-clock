import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import TimerLabel from './TimerLabel.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      inSession: true
    }

  }
  render() {
    return (
      <div className="App">
        <div id = "timer" className = "display">
          <TimerLabel session = {this.state.inSession} />
          <Timer minsLeft = {this.state.minutes} secsLeft = {this.state.seconds} />
        </div>
        <div id = "options" className = "display">
        </div>
      </div>
    );
  }
}

export default App;
