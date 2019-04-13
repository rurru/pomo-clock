import React, { Component } from 'react';
import './App.css';

const 

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      sessionLength: 25,
      breakLength: 5,
      secondsLeft: 25
    }

  }
  render() {
    return (
      <div className="App">
        <div id = "timer" className = "display">
        </div>
        <div id = "options" className = "display">
        </div>
      </div>
    );
  }
}

export default App;
