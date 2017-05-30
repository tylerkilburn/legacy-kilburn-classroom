import React from 'react';
import PropTypes from 'prop-types';
import { nameTag } from '../shared/helpers';

const Seat = props => (
  <div className="seating__seat">
    {nameTag(props.student)}
  </div>
);

Seat.propTypes = {
  student: PropTypes.object.isRequired,
};

export default Seat;
