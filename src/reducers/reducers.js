import * as ActionTypes  from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { Map, List } from "immutable";

const initialCols = List().push(Map({
    name: "id",
    label: "Id",
    width: 100
})).push(Map({
    name: "name",
    label: "Name",
    width: 200
})).push(Map({
    name: "surname",
    label: "Surname",
    width: 200
}));

const initialRows = List([Map({
    id: 1,
    name: "Aaa",
    surname: "aaa"
}), Map({
    id: 2,
    name: "Bbb",
    surname: "bbb"
}), Map({
    id: 3,
    name: "Ccc",
    surname: "ccc"
})]);

const cols = (state = initialCols, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rows = (state = initialRows, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROW:
        {
            const max = state.reduce((memo, row) => Math.max(row.get("id"), memo), 0);
            return state.push(Map({
                id: max + 1,
                name: action.name,
                surname: action.surname
            }));
        }
        default:
            return state;
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_TABLE:
            return null;
        case ActionTypes.SELECT_ROW:
            return action.id ? action.id : null;
        default:
            return state;
    }
};

export default combineReducers({
    rows,
    cols,
    selected
});