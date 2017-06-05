import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Menu from './Menu';

const menuItems = [
  { name: 'Call On', route: '/callon' },
  { name: 'Groups', route: '/groups' },
  { name: 'Seating Chart', route: '/seating' },
];

describe('Menu', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Menu menuItems={ menuItems } />);
    expect(wrapper.exists());
  });
});
