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
});
