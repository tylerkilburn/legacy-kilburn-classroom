import React from 'react';
import PropTypes from 'prop-types';
import { groupStudents } from './helpers';
import Pairing from '../Pairing/Pairing';

const Groups = (props) => {
  const studentGroups = groupStudents(props.students, 2);
  return (
    <div>
      {(studentGroups.map((pairs, index) => {
        const key = `studentGroup-${index}`;
        return (<Pairing key={ key } students={ pairs } />);
      }))}
    </div>
  );
};

Groups.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Groups;
