import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Pairing from './Pairing';

describe('Pairing', function() {

    it('renders without exploding', () => {
        const wrapper = shallow(<Pairing />);
        expect(wrapper.exists());
    });
    it('renders all students the group');
});