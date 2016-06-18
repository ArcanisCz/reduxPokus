import * as ActionTypes  from '../actions/actionTypes';
import { combineReducers } from 'redux';

const cols = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_TABLE:
            return [{
                name: "id",
                label: "Id",
                width: 100
            }, {
                name: "name",
                label: "Name",
                width: 200
            }, {
                name: "surname",
                label: "Surname",
                width: 200
            }];
        default:
            return state;
    }
};

const rows = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_TABLE:
            return [{
                id: 1,
                name: "Aaa",
                surname: "aaa"
            }, {
                id: 2,
                name: "Bbb",
                surname: "bbb"
            }, {
                id: 3,
                name: "Ccc",
                surname: "ccc"
            }];
        case ActionTypes.ADD_ROW:
        {
            const max = state.reduce((memo, row) => Math.max(row.id, memo), 0);
            return [...state,
                {
                    id: max + 2,
                    name: action.name,
                    surname: action.surname
                }
            ];
        }
        default:
            return state;
    }
};

export default combineReducers({
    rows,
    cols
});