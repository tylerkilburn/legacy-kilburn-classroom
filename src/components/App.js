import React from 'react';
import logo from '../logo.svg';
import Header from './Header/Header';
import studentData from '../data/students.json';
import Router from './Router';
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
        studentsInPeriod: [],
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
    current.studentsInPeriod = getStudentsInPeriod(this.state.students, period);
    this.setState({ current });
  }
  shuffleStudentSeatingForPeriod() {
    const current = { ...this.state.current };
    current.studentSeating = shuffleStudents(this.state.current.studentsInPeriod);
    this.setState({ current });
  }

  render() {
    return (
      <div className="app">
        <Header
          siteName={ 'Mrs. Kilburn\'s Classroom' }
        />
        <Router
          current={ this.state.current }
          periods={ this.state.periods }
          seatArrangement={ this.state.seatArrangement }
          setPeriod={ this.setPeriod }
          shuffleStudentSeatingForPeriod={ this.shuffleStudentSeatingForPeriod }
        />
      </div>
    );
  }
}

export default App;
