import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatingColumn from './SeatingColumn';
import Seat from './Seat';

const students = [
    { firstName: 'first01', lastName: 'last01' },
    { firstName: 'first02', lastName: 'last02' },
];

describe('SeatingColumn', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<SeatingColumn students={ students } />);
    expect(wrapper.exists());
  });

  it('contains at least one <Seat/> component', () => {
    const wrapper = mount(<SeatingColumn students={ students } />);
    expect(wrapper.find(Seat)).to.have.length.least(1);
  });
});
