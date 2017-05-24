import React, { Component } from 'react';
import logo from '../logo.svg';
import PeriodSelect from './controls/PeriodSelect';
import SeatingChart from './seating/SeatingChart';
import studentData from '../data/students.json';
import '../App.css';

class App extends Component {
      constructor() {
        super();

        // InitialState
        this.state = {
            periods: [1, 2, 3],
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
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="menu">`</div>
        
        <div className="wrapper">
          <PeriodSelect
            periods={this.state.periods}
          />
          <SeatingChart
            seatArrangement={this.state.seatArrangement}         
            students={this.state.students}
          />
        </div>
      </div>
    );
  }
}

export default App;
