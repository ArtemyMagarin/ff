import React from 'react';
import checkmark from '../checkmark.svg';

export const Favorite = props => {
    return (
        <span className={`favorite ${props.filled ? 'filled': ''} ${props.className||''}`}></span>
    )
}

export const Checkmark = props => (
    <img src={checkmark} className="checkmark" alt=""/>
)

export const Pill = props => (
    <span className="pill">{props.children}</span>
)

export const Spinner = props => (
    <div className="d-flex justify-content-center ff-text-brand-blue">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
    </div>)
