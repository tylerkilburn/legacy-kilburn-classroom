import React from 'react';
import PropTypes from 'prop-types';
import SeatColumn from './SeatColumn';

const SeatRow = props => (
  <div className="seating__row">
    {props.students.map((studentsInColumn, index) => (<SeatColumn
      key={ `column-${index}` }
      students={ studentsInColumn }
    />))}
  </div>
);

SeatRow.propTypes = {
  students: PropTypes.array.isRequired,
};

export default SeatRow;
