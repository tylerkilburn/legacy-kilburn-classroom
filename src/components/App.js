import React from 'react';
import logo from '../logo.svg';
import PeriodSelect from './controls/PeriodSelect';
import SeatingChart from './seating/SeatingChart';
import studentData from '../data/students.json';
import { getPeriodsFromStudents } from './shared/helpers';
import '../App.css';

class App extends React.Component {
      constructor() {
        super();

        // InitialState
        this.state = {
          current: {
            period: 0,
            studentSeating: []
          },
          periods: getPeriodsFromStudents(studentData),
          seatArrangement: {
            bunches: 3,
            columns: 3,
            rows: 3,
          },
          students: studentData,
        };

        // Bind Functions
        this.setPeriod = this.setPeriod.bind(this);
      }

      setPeriod(period) {
          const current = {...this.state.current};
          current.period = period || 0;
          this.setState({ current });
      }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="menu"></div>
        
        <div className="wrapper">
          <PeriodSelect
            periods={this.state.periods}
            setPeriod={this.setPeriod}
          />
          
          <SeatingChart
            seatArrangement={this.state.seatArrangement}         
            students={this.state.current.studentSeating}
          />
        </div>
      </div>
    );
  }
}

export default App;
