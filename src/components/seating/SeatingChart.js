import React from 'react';
import PropTypes from 'prop-types';
import SeatRow from './SeatRow';
import { addStudentsToSeats } from './helpers';

const SeatingChart = (props) => {
    const studentsInSeats = addStudentsToSeats(props.students, props.seatArrangement);
    return (
        <div className="seating">
            <button className="button">Create Seating Chart</button>
            <div className="seating__chart">
                {studentsInSeats.map((studentsInRow, index) => {
                    return (<SeatRow key={`row-${index}`}
                        students = {studentsInRow}
                    />)
                })}
            </div>
        </div>
    );
}

SeatingChart.propTypes = {
    students: PropTypes.array.isRequired
}

export default SeatingChart;