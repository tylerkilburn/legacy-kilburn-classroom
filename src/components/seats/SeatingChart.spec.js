import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SeatingChart from './SeatingChart';

describe('SeatingChart', function() {
    it('renders without exploding', () => {
        const wrapper = shallow(<SeatingChart />);
        expect(wrapper.exists());
    });
    it('renders all seats');
});