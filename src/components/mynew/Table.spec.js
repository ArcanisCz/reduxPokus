import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Table from './Table';

describe('<Table />', () => {
    it('should be a \'table\'', () => {
        const wrapper = shallow(<Table />);
        const actual = wrapper.find('table');
        expect(actual.length).to.equal(1);
    });
});
