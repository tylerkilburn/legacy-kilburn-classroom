import React from 'react';
import PropTypes from 'prop-types';
import SeatingRow from '../SeatingRow/SeatingRow';
import { addStudentsToSeats } from './helpers';

class SeatingChart extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        this.props.shuffleStudentSeatingForPeriod();
    }

    render() {
        const studentsInSeats = addStudentsToSeats(this.props.students, this.props.seatArrangement);
        return (
            <div className="seating">
                <button className="button" onClick={this.handleClick}>Create New Seating Chart</button>
                <div className="seating__chart">
                    {studentsInSeats.map((studentsInRow, index) => {
                        return (<SeatingRow key={`row-${index}`}
                            students = {studentsInRow}
                        />)
                    })}
                </div>
            </div>
        );
    }
}

SeatingChart.propTypes = {
    students: PropTypes.array.isRequired
}

export default SeatingChart;