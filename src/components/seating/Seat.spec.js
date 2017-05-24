import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Seat from './Seat';

const student = { firstName: 'first01', lastName: 'last01' };

describe('Seat', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<Seat student={student} />);
        expect(wrapper.exists());
    });
    it('renders a student name if there is one');
});