import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';

import ControlBar from './ControlBar/ControlBar';
import SeatingChart from './SeatingChart/SeatingChart';
import Groups from './Groups/Groups';

const Router = props => (
  <BrowserRouter>
    <switch>
      <ControlBar
        menuItems={ [
            { name: 'Call On', route: '/callon' },
            { name: 'Groups', route: '/groups' },
            { name: 'Seating Chart', route: '/seating' },
        ] }
        period={ props.current.period }
        periodOptions={ props.periods }
        setPeriod={ props.setPeriod }
      />
      <div className="wrapper">
        <Route
          path="/callon"
          component={ () => (<SeatingChart
            seatArrangement={ props.seatArrangement }
            students={ props.current.studentSeating }
            shuffleStudentSeatingForPeriod={ props.shuffleStudentSeatingForPeriod }
          />) }
        />
        <Route
          path="/groups"
          component={ () => (<Groups
            students={ props.current.studentsInPeriod }
          />) }
        />
        <Route
          path="/seating"
          component={ () => (<SeatingChart
            seatArrangement={ props.seatArrangement }
            students={ props.current.studentSeating }
            shuffleStudentSeatingForPeriod={ props.shuffleStudentSeatingForPeriod }
          />) }
        />
      </div>
    </switch>
  </BrowserRouter>
);

Router.propTypes = {
  current: PropTypes.object.isRequired,
  periods: PropTypes.array.isRequired,
  seatArrangement: PropTypes.object.isRequired,
  setPeriod: PropTypes.func.isRequired,
  shuffleStudentSeatingForPeriod: PropTypes.func.isRequired,
};

export default Router;

