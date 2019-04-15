import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import TimerLabel from './TimerLabel.js';
import TimerControl from './TimerControl.js';
import Options from './Options.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      inSession: true,
      isRunning: false
    }
  }

  handleChangeLength = (counter, newLength) => {
    if (counter === "session") {
      this.setState({sessionLength: newLength});
    } else {
      this.setState({breakLength: newLength});
    }
  }

  Countdown() {

  }

  render() {
    const settingStyle = {padding: '20px 0', height: '210px'};
    
    return (
      <div className="App">

        <div id = "timer" className = "display">
          <TimerLabel session = {this.state.inSession} />
          <Timer minsLeft = {this.state.minutes} secsLeft = {this.state.seconds} />
          <div id = "controls">
            <TimerControl id = "start_stop" text = {this.state.isRunning ? "Pause" : "Start"} />
            <TimerControl id = "reset" text = "Reset" />
          </div>
        </div>

        <div id = "options" className = "display" style = {settingStyle}>
          <Options name = "session" value = {this.state.sessionLength}      
                   changeLength = {this.handleChangeLength} />
          <Options name = "break" value = {this.state.breakLength} 
                  changeLength = {this.handleChangeLength} />
        </div>
      </div>
    );
  }
}

export default App;
