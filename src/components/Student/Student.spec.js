import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Student from './Student';

const student = { firstName: 'first01', lastName: 'last01' };

describe('Student', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Student student={ student } />);
    expect(wrapper.exists());
  });
  it('renders a student name if there is one');
});
