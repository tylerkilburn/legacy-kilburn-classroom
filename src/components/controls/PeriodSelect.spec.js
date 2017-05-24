import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PeriodSelect from './PeriodSelect';

const periods = [1, 2, 3];

describe('PeriodSelect', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<PeriodSelect periods={periods} />);
        expect(wrapper.exists());
    });
    it('renders a student name if there is one');
});