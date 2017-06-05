import React from 'react';
import PropTypes from 'prop-types';
import SeatingColumn from '../SeatingColumn/SeatingColumn';

const SeatingRow = props => (
  <div className="seating__row">
    {props.students.map((studentsInColumn, index) => (<SeatingColumn
      key={ `column-${index}` }
      students={ studentsInColumn }
    />))}
  </div>
);

SeatingRow.propTypes = {
  students: PropTypes.array.isRequired,
};

export default SeatingRow;
