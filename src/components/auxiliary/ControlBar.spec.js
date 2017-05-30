import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ControlBar from './ControlBar';


const menuItems = [{ name: 'Seating Chart', route: './seating-chart' }];
const period = 1;
const periodOptions = [1, 2, 3];
const setPeriod = () => 1;

describe('ControlBar', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<ControlBar
      menuItems={ menuItems }
      period={ period }
      periodOptions={ periodOptions }
      setPeriod={ setPeriod }
    />);
    expect(wrapper.exists());
  });
});
