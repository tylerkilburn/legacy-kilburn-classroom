import React from 'react';
import logo from '../logo.svg';
import PeriodSelect from './controls/PeriodSelect';
import SeatingChart from './seating/SeatingChart';
import studentData from '../data/students.json';
import {
  getPeriodsFromStudents,
  getStudentsInPeriod,
  shuffleStudents,
} from './shared/helpers';
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
        this.shuffleStudentSeatingForPeriod = this.shuffleStudentSeatingForPeriod.bind(this);
      }

      setPeriod(period = 0) {
          const current = {...this.state.current};
          current.period = period;
          this.setState({ current });
      }
      shuffleStudentSeatingForPeriod() {
          const current = {...this.state.current};
          current.studentSeating = getStudentsInPeriod(this.state.students, this.state.current.period);
          current.studentSeating = shuffleStudents(current.studentSeating);
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
            period={this.state.current.period}
            periodOptions={this.state.periods}
            setPeriod={this.setPeriod}
          />
          
          <SeatingChart
            seatArrangement={this.state.seatArrangement}   
            students={this.state.current.studentSeating}
            shuffleStudentSeatingForPeriod={this.shuffleStudentSeatingForPeriod}
          />
        </div>
      </div>
    );
  }
}

export default App;
