import React from 'react';
import PropTypes from 'prop-types';

const Seat = (props) => {
    return (
        <div className="seating__seat">
            {props.student.firstName}
        </div>
    );
}

Seat.propTypes = {
    student: PropTypes.object.isRequired
}

export default Seat;