import React from 'react';
import logo from '../logo.svg';
import Header from './auxiliary/Header';
import ControlBar from './auxiliary/ControlBar';
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
        studentSeating: [],
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
    const current = { ...this.state.current };
    current.period = period;
    this.setState({ current });
  }
  shuffleStudentSeatingForPeriod() {
    const current = { ...this.state.current };
    current.studentSeating = getStudentsInPeriod(this.state.students, this.state.current.period);
    current.studentSeating = shuffleStudents(current.studentSeating);
    this.setState({ current });
  }

  render() {
    return (
      <div className="app">
        <Header
          siteName={ 'Mrs. Kilburn\'s Classroom' }
        />
        <ControlBar
          menuItems={ [
            { name: 'Seating Chart', route: './seating-chart' },
          ] }
          period={ this.state.current.period }
          periodOptions={ this.state.periods }
          setPeriod={ this.setPeriod }
        />

        <div className="wrapper">

          <SeatingChart
            seatArrangement={ this.state.seatArrangement }
            students={ this.state.current.studentSeating }
            shuffleStudentSeatingForPeriod={ this.shuffleStudentSeatingForPeriod }
          />
        </div>
      </div>
    );
  }
}

export default App;
