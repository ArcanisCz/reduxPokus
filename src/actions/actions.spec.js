import {expect} from 'chai';
import * as ActionCreators from './actions';
import * as ActionTypes from './actionTypes';

describe('Actions', () => {
    it("should create a refresh table action", () => {
        const expected = {
            type: ActionTypes.REFRESH_TABLE
        };
        expect(ActionCreators.refreshTable()).to.deep.equal(expected);
    });

    it("should create a add row action", () => {
        const expected = {
            type: ActionTypes.ADD_ROW,
            name: "Ddd",
            surname: "ddd"
        };
        expect(ActionCreators.addRow("Ddd", "ddd")).to.deep.equal(expected);
    });

    it("should create a select row action", () => {
        const expected = {
            type: ActionTypes.SELECT_ROW,
            id: 2
        };
        expect(ActionCreators.selectRow(2)).to.deep.equal(expected);
    });
});
