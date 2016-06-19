import React from 'react';
import { List } from "immutable";

const Table = ({cols=List(), rows=List(), selected=null, onSelect}) => {
    return (
        <table>
            <thead>
            <tr>
                {cols.map((col) =>
                    <th style={{width: col.get("width")}} key={col.get("name")}>{col.get("label")}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {rows.map((row) =>
                <tr key={row.get("id")} onClick={onSelect.bind(this, row.get("id"))} className={selected==row.get("id") ? "selected" : ""}>
                    {cols.map((col) =>
                        <td style={{width: col.get("width")}} key={col.get("name")}>{row.get(col.get("name"))}</td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    cols: React.PropTypes.instanceOf(List),
    rows: React.PropTypes.instanceOf(List),
    selected: React.PropTypes.number,
    onSelect: React.PropTypes.func
};

export default Table;