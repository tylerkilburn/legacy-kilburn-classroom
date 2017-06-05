import React from 'react';
import PropTypes from 'prop-types';
import { nameTag } from '../shared/helpers';

const Student = props => (
  <div className="seating__seat">
    {nameTag(props.student)}
  </div>
);

Student.propTypes = {
  student: PropTypes.object.isRequired,
};

export default Student;
