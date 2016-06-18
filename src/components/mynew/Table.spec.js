import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Table from './Table';

describe('<Table />', () => {
    it('should be a \'table\'', () => {
        const wrapper = shallow(<Table />);
        const actual = wrapper.find('table');
        console.log(actual);

        //expect(actual).to.equal(expected);
        expect(false).to.equal(true);
    });
});
