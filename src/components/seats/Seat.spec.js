import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Seat from './Seat';

describe('Seat', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<Seat />);
        expect(wrapper.exists());
    });
    it('renders a student name if there is one');
});