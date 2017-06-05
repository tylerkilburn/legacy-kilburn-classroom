import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatingRow from './SeatingRow';
import SeatingColumn from '../SeatingColumn/SeatingColumn';

const students = [
  [
        { firstName: 'first01', lastName: 'last01' },
        { firstName: 'first02', lastName: 'last02' },
  ],
  [
        { firstName: 'first03', lastName: 'last03' },
        { firstName: 'first04', lastName: 'last04' },
  ],
];

describe('SeatingRow', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<SeatingRow students={ students } />);
    expect(wrapper.exists());
  });

  it('contains at least one <SeatingColumn/> component', () => {
    const wrapper = mount(<SeatingRow students={ students } />);
    expect(wrapper.find(SeatingColumn)).to.have.length.least(1);
  });
});

