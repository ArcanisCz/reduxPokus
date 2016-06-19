import * as ActionTypes from "./actionTypes";

export const refreshTable = () => ({
    type: ActionTypes.REFRESH_TABLE
});

export const addRow = (name, surname) => ({
    type: ActionTypes.ADD_ROW,
    name,
    surname
});

export const selectRow = (id) => ({
    type: ActionTypes.SELECT_ROW,
    id
});