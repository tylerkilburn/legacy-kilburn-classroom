import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatingChart from './SeatingChart';
import SeatRow from './SeatRow';

const students = [
    { firstName: 'first01', lastName: 'last01' },
    { firstName: 'first02', lastName: 'last02' },
    { firstName: 'first03', lastName: 'last03' },
    { firstName: 'first04', lastName: 'last04' },
    { firstName: 'first05', lastName: 'last05' },
    { firstName: 'first06', lastName: 'last06' },
    { firstName: 'first07', lastName: 'last07' },
    { firstName: 'first08', lastName: 'last08' },
];

const seatArrangement = {
  bunches: 2,
  columns: 2,
  rows: 2,
};

describe('SeatingChart', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<SeatingChart students={ students } seatArrangement={ seatArrangement } />);
    expect(wrapper.exists());
  });
  it('contains at least one <SeatRow/> component', () => {
    const wrapper = mount(<SeatingChart students={ students } seatArrangement={ seatArrangement } />);
    expect(wrapper.find(SeatRow)).to.have.length.least(1);
  });
});
