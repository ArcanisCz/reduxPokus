import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Detail from './Detail';
import Immutable from "immutable";

const cols = Immutable.fromJS([{
    name: "id",
    label: "Id"
},{
    name: "id",
    label: "Id"
}]);

const rows = Immutable.fromJS([{
    id: 1,
    name: "Aaa"
},{
    id: 2,
    name: "Bbb"
}]);

describe('<Detail />', () => {
    it('should be a \'div\' with class .side', () => {
        const wrapper = shallow(<Detail />);
        const actual = wrapper.find('div.side');
        expect(actual.length).to.equal(1);
    });

    it('should render nothing without selected id from rows', () => {
        const wrapper = shallow(<Detail cols={cols} rows={rows} />);
        const actual = wrapper.find('dl');
        expect(actual.length).to.equal(0);
    });

    it('should render cols in proper order', () => {
        const wrapper = shallow(<Detail cols={cols} rows={rows} selected={2} />);
        const actual = wrapper.find('dl');
        expect(actual.length).to.equal(2);

        const idElem = actual.at(0).find("dt");
        expect(idElem.text()).to.equal(cols.get(0).get("label"));

        const nameElem = actual.at(1).find("dt");
        expect(nameElem.text()).to.equal(cols.get(1).get("label"));

    });

    it('should render row', () => {
        const wrapper = shallow(<Detail cols={cols} rows={rows} selected={2} />);
        const actual = wrapper.find('dl');
        expect(actual.length).to.equal(2);

        const idElem = actual.at(0).find("dd");
        expect(idElem.text()).to.equal(rows.get(1).get(cols.get(0).get("name"))+"");

        const nameElem = actual.at(1).find("dd");
        expect(nameElem.text()).to.equal(rows.get(1).get(cols.get(1).get("name"))+"");
    });
});
