import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatColumn from './SeatColumn';
import Seat from './Seat';

const students = [
    { firstName: 'first01', lastName: 'last01' },
    { firstName: 'first02', lastName: 'last02' },
];

describe('SeatColumn', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<SeatColumn students={ students } />);
    expect(wrapper.exists());
  });

  it('contains at least one <Seat/> component', () => {
    const wrapper = mount(<SeatColumn students={ students } />);
    expect(wrapper.find(Seat)).to.have.length.least(1);
  });
});
