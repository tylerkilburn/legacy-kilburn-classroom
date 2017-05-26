import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PeriodSelect from './PeriodSelect';
import {spy} from 'sinon';

const period = 8;
const periodOptions = [7, 8, 9];
const setPeriod = input => ({ function: 'setPeriod', input });

const wrapper = shallow(<PeriodSelect
    period={period}
    periodOptions={periodOptions}
    setPeriod={setPeriod}
/>);

describe('PeriodSelect', () => {
    it('renders without exploding', () => {
        const wrapper = shallow(<PeriodSelect period={period} periodOptions={periodOptions} />);
        expect(wrapper.exists());
    });

    it('renders correct period options', () => {
        const wrapper = shallow(<PeriodSelect
            period={period}
            periodOptions={periodOptions}
        />);
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

    it('should set the current period based on prop', () => {
        expect(wrapper.find('select').prop('value')).to.equal(8);
    });

    it('should call the setPeriod() period is changed', () => {
        // const refreshUserListButton = wrapper.find('button');
        // refreshUserListButton.simulate('click');

        // assert.ok(MAIN_VIEW_PROPS.refreshUserList.calledOnce);
    });
});