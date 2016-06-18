import React from 'react';
import Table from "./mynew/Table";

const cols = [{
    name: "id",
    label: "Id",
    width: 100
},{
    name: "name",
    label: "Name",
    width: 200
},{
    name: "surname",
    label: "Surname",
    width: 200
}];

const rows = [{
    id: 1,
    name: "Aaa",
    surname: "aaa"
},{
    id: 2,
    name: "Bbb",
    surname: "bbb"
},{
    id: 3,
    name: "Ccc",
    surname: "ccc"
}];


const HomePage = () => {
    return (
        <div>
            <Table cols={cols} rows={rows}/>
        </div>
    );
};

export default HomePage;
