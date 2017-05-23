import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import SeatColumn from './SeatColumn';
// import SeatBunch from './SeatBunch';

describe('SeatColumn', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<SeatColumn />);
        expect(wrapper.exists());
    });
    it('contains at least one <SeatBunch/> component');
});