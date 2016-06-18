import { connect } from 'react-redux';
import Table from '../components/mynew/Table';

const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        cols: state.cols
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
