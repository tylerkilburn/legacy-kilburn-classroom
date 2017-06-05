import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MenuBar from './MenuBar';

const menuItems = [
  { name: 'Call On', route: '/callon' },
  { name: 'Groups', route: '/groups' },
  { name: 'Seating Chart', route: '/seating' },
];

describe('MenuBar', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<MenuBar menuItems={ menuItems } />);
    expect(wrapper.exists());
  });
});
