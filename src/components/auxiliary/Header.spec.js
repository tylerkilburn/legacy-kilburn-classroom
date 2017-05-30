import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

const siteName = 'Site Name';

describe('Header', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Header siteName={ siteName }/>);
    expect(wrapper.exists());
  });
});
