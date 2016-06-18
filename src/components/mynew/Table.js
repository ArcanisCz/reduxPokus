import React from 'react';

const Table = (props) => {
    return (
        <table>
            <thead>
            <tr>
                {props.cols.map((col) =>
                    <th style={{width: col.width}} key={col.name}>{col.label}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {props.rows.map((row) =>
                <tr key={row.id}>
                    {props.cols.map((col) =>
                        <td style={{width: col.width}} key={col.name}>{row[col.name]}</td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    cols: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        width: React.PropTypes.number.isRequired
    })),
    rows: React.PropTypes.array
};

export default Table;