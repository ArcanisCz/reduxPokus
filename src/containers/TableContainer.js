import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/mynew/Table';
import * as Actions from "../actions/actions";

const TableContainer = ({rows, cols, onClick}) => {
    return (
        <div>
            <button onClick={() => onClick()}>Aaa</button>
            <Table rows={rows} cols={cols}/>
        </div>
    );
};

TableContainer.propTypes = {
    cols: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        cols: state.cols
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(Actions.addRow("a", "b"))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableContainer);
