import React from 'react';
import { List } from "immutable";

const Detail = ({rows=List(), cols=List(), selected=null}) => {
    const row = rows.find((item) => item.get("id") == selected);
    return (
        <div className="side">
            {row ? cols.map((col) =>
                <dl key={col.get("name")}>
                    <dt>{col.get("label")}</dt>
                    <dd>{row.get(col.get("name"))}</dd>
                </dl>
            ): []}
        </div>
    );
};

Detail.propTypes = {
    cols: React.PropTypes.instanceOf(List),
    rows: React.PropTypes.instanceOf(List),
    selected: React.PropTypes.number
};

export default Detail;