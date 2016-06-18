import * as ActionTypes  from '../actions/actionTypes';


const initialState = {
    rows: [],
    cols: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_TABLE:
            return Object.assign({}, state, {
                cols: [{
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
                }]
            });
        default:
            return state;
    }
};


//const cols = [{
//    name: "id",
//    label: "Id",
//    width: 100
//},{
//    name: "name",
//    label: "Name",
//    width: 200
//},{
//    name: "surname",
//    label: "Surname",
//    width: 200
//}];
//
//const rows = [{
//    id: 1,
//    name: "Aaa",
//    surname: "aaa"
//},{
//    id: 2,
//    name: "Bbb",
//    surname: "bbb"
//},{
//    id: 3,
//    name: "Ccc",
//    surname: "ccc"
//}];