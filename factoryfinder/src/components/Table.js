import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fftable from '../styles/fftable.css';

export default class Table extends Component {
    render() {
        return (
            <table className="table ff-table">
                <thead>
                    <tr>
                        {this.props.head.map((item, id) => (
                            <th key={id} scope="col">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.body.map((item, id) => item)}
                </tbody>
            </table>
        );
    }
}
