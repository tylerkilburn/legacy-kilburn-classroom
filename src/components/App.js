import React, { Component } from 'react';
import logo from '../logo.svg';
import SeatingChart from './seats/SeatingChart';
import studentData from '../data/students.json';
import '../App.css';

class App extends Component {
      constructor() {
        super();

        // InitialState
        this.state = {
            seatArrangement: {
              bunches: 3,
              columns: 3,
              rows: 3,
            },
            students: studentData,
        };
      }
  render() {
    return (
      <div className="app">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="menu">Menu</div>
        <div className="wrapper">
          Main Content
          <SeatingChart
            seats={this.state.seats}         
            students={this.state.students}
          />
        </div>
      </div>
    );
  }
}

export default App;
