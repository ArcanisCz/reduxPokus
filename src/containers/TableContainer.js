import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/mynew/Table';
import Detail from '../components/mynew/Detail';
import * as Actions from "../actions/actions";
import { List } from "immutable";

const TableContainer = ({rows, cols, onClick, selectRow, selected}) => {
    return (
        <div>
            <section id="left">
                <button onClick={() => onClick()}>Aaa</button>
                <Table rows={rows} cols={cols} onSelect={selectRow} selected={selected}/>
            </section>
            <section id="right">
                <Detail rows={rows} cols={cols} selected={selected}/>
            </section>
        </div>
    );
};

TableContainer.propTypes = {
    cols: React.PropTypes.instanceOf(List).isRequired,
    rows: React.PropTypes.instanceOf(List).isRequired,
    onClick: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    selected: React.PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        cols: state.cols,
        selected: state.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(Actions.addRow("a", "b")),
        selectRow: (id) =>  dispatch(Actions.selectRow(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableContainer);
