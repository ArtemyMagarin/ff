import React from 'react';

import card from '../styles/ffcard.css';

const Card = props => {
    return (<div className={`ff-card ${props.className||''}`}>
            {props.children}
        </div>)
}

export default Card;