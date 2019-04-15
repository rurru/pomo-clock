import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import TimerLabel from './TimerLabel.js';
import TimerControl from './TimerControl.js';
import Options from './Options.js';

let countdownTimer;

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

  componentDidUpdate(props) {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      document.getElementById('beep').play();
    }
  }

  handleChangeLength = (counter, newLength) => {

    if (counter === "session") {
      this.setState({sessionLength: newLength}); 
    } else {
      this.setState({breakLength: newLength});
    }

    if (!this.state.isRunning) {
      this.setState({minutes: newLength, seconds: 0});
    } 
    
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      clearInterval(countdownTimer);
    } else {
      countdownTimer = setInterval(this.Countdown, 1000);
    }

    this.setState(oldState => ({isRunning: !oldState.isRunning}));
  }

  handleReset = () => {
    clearInterval(countdownTimer);
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;

    this.setState({
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      inSession: true,
      isRunning: false
    });
  }

  Countdown = () => {
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
           const newMins = this.state.inSession ? this.state.breakLength : this.state.sessionLength;
           this.setState(oldState => ({minutes: newMins, inSession: !oldState.inSession}))
        } else {
          this.setState(oldState => ({minutes: oldState.minutes - 1, seconds: 59}));
        } 
      } else {
          this.setState(oldState => ({seconds: oldState.seconds - 1}));
      }    
  }

  render() {
    const settingStyle = {padding: '20px 0', height: '210px'};
    
    return (
      <div className="App">

        <div id = "timer" className = "display">
          <TimerLabel session = {this.state.inSession} />
          <Timer minsLeft = {this.state.minutes} secsLeft = {this.state.seconds} />
          <div id = "controls">
            <TimerControl id = "start_stop" text = {this.state.isRunning ? "Pause" : "Start"} 
              controlTimer = {this.handleStartStop} />
            <TimerControl id = "reset" text = "Reset" controlTimer = {this.handleReset} />
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
