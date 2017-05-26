import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PeriodSelect from './PeriodSelect';


describe('PeriodSelect', () => {
    it('renders without exploding', () => {
        const periods = [1, 2, 3];
        const wrapper = shallow(<PeriodSelect periods={periods} />);
        expect(wrapper.exists());
    });
    it('renders correct period options', () => {
        const periods = [7, 8, 9];
        const wrapper = shallow(<PeriodSelect periods={periods} />);
        expect(wrapper.find('select').childAt(0).html()).to.equal(
            '<option value="">-Select a Period-</option>'
        );
        expect(wrapper.find('select').childAt(1).html()).to.equal(
            '<option value="7">7</option>'
        );
        expect(wrapper.find('select').childAt(2).html()).to.equal(
            '<option value="8">8</option>'
        );
        expect(wrapper.find('select').childAt(3).html()).to.equal(
            '<option value="9">9</option>'
        );
    });
});