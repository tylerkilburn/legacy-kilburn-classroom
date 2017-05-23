import React from 'react';
import PropTypes from 'prop-types';
import SeatColumn from './SeatColumn';

const SeatRow = (props) => {
    return (
        <div className="seating__seat-row">
            {props.students.map((studentsInColumn, index) => {
                return (<SeatColumn key={`column-${index}`}
                    students = {studentsInColumn}
                />)
            })}
        </div>
    );
}

SeatRow.propTypes = {
    students: PropTypes.array
}

export default SeatRow;