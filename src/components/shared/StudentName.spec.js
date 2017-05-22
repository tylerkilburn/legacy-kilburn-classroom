import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import StudentName from './StudentName';

describe('StudentName', function() {

    it('renders without exploding', () => {
        const wrapper = shallow(<StudentName />);
        expect(wrapper.exists());
    });
    it('renders all students the group');
});