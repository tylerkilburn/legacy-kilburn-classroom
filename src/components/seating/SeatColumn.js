import React from 'react';
import PropTypes from 'prop-types';
import Seat from './Seat';

const SeatColumn = (props) => {
    return (
        <div className="seating__column">
            {props.students.map((student, index) => {
                return (<Seat key={`seat-${index}`}
                    student = {student}
                />)
            })}
        </div>
    );
}

SeatColumn.propTypes = {
    students: PropTypes.array.isRequired
}

export default SeatColumn;