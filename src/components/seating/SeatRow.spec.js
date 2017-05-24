import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatRow from './SeatRow';
import SeatColumn from './SeatColumn';

const students = [
    [
        { firstName: 'first01', lastName: 'last01' },
        { firstName: 'first02', lastName: 'last02' },
    ],
    [
        { firstName: 'first03', lastName: 'last03' },
        { firstName: 'first04', lastName: 'last04' },
    ],
]

describe('SeatRow', function() {
    it('renders without exploding', () => {
        const wrapper = shallow(<SeatRow students={students} />);
        expect(wrapper.exists());
    });
    
    it('contains at least one <SeatColumn/> component', () => {
        const wrapper = mount(<SeatRow students={students} />);
        expect(wrapper.find(SeatColumn)).to.have.length.least(1);
    });
});

