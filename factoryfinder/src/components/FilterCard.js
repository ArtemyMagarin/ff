import React, { useState } from 'react';

import Card from './Card';


const FilterCard = props => {
    
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className={`filter-card ${props.canExpand?'expandable':''} ${expanded?'open':''} ${props.className||''}`}>
            <h5 className={'title'}>{props.cardTitle}</h5>
            <div className={`inner ${props.innerClass||''}`}>
                {props.children}
            </div>
            {props.canExpand && (<a href="#" className={'text-decoration-none expand-toggler'} onClick={()=>{setExpanded(!expanded)}}>{`Show ${expanded?'less':'more'}`}</a>)}
        </Card>
    );
}

export default FilterCard;
