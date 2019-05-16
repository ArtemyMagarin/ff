import React, {useState, useEffect} from 'react';
import '../styles/fftable.css';
import Card from './Card';
import { CardInfoInner } from './Company';
import fav from '../heart-thin.svg';


const ListCard = props => (
    <Card className={`filter-card ${props.className||''}`} onClick={props.onClick}>
        <div className={'d-flex mb-2 align-items-center'}>
            <h5 className={'title mb-0'}>{props.cardTitle}</h5>
            {props.interactive}
        </div>
        <div className='inner'>
            {props.children}
        </div>
    </Card>
);


const ResponsiveTable = props => {
    
    const [isMobile, setMobile] = useState(window.outerWidth <= 768)

    useEffect(()=>{
        const setMobileView = e => setMobile(window.outerWidth <= 768)
        window.addEventListener('resize', setMobileView, true)
        return () => { window.removeEventListener('resize', setMobileView, true) }
    }, [])


    return !isMobile ? (<table className="table ff-table">
        <thead>
            <tr>
                {props.head.map((item, id) => (
                    <th key={id} scope="col">{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {props.body}
        </tbody>
    </table>) : (props.mobileData.map((item, index) =>  (
        <ListCard key={index} cardTitle={item.company_name||'N/A'} onClick={()=>{props.onCardClick(item.id)}} interactive={<img src={fav} className={'d-block ml-auto'} height="14" width="16" alt="Add to favorite"/>}>
            <CardInfoInner label={'Director'} value={item.director}/>
            <CardInfoInner label={'INN'} value={item.inn}/>
        </ListCard>)))
}

export default ResponsiveTable;
