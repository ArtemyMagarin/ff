import React from 'react';
import '../styles/fftable.css';
const Table = props => (
    <table className="table ff-table">
        <thead>
            <tr>
                {props.head.map((item, id) => (
                    <th key={id} scope="col">{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {props.body.map((item, id) => item)}
        </tbody>
    </table>);

export default Table;
