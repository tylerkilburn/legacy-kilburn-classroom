import React from 'react';
import PropTypes from 'prop-types';
import Student from '../Student/Student';

const SeatingColumn = props => (
  <div className="seating__column">
    {props.students.map((student, index) => (<Student
      key={ `studentSeat-${index}` }
      student={ student }
    />))}
  </div>
);

SeatingColumn.propTypes = {
  students: PropTypes.array.isRequired,
};

export default SeatingColumn;
