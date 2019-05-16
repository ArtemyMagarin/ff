import React, { Component } from 'react';
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


class ResponsiveTable extends Component {
    state = {
        isMobile: window.outerWidth <= 768
    }
    
    updateMobileView = e => this.setState({isMobile: window.outerWidth <= 768})
    
    componentDidMount() {
        window.addEventListener('resize', this.updateMobileView, true)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateMobileView, true)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isMobile !== nextState.isMobile 
            || this.props.body.length !== nextProps.body.length 
    }

    render() {
        return (!this.state.isMobile || !this.props.mobileData) ? (<table className="table ff-table">
            <thead>
                <tr>
                    {this.props.head.map((item, id) => (
                        <th key={id} scope="col">{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {this.props.body}
            </tbody>
        </table>) : (this.props.mobileData.map((item, index) =>  (
            <ListCard key={index} cardTitle={item.company_name||'N/A'} onClick={()=>{this.props.onCardClick(item.id)}} interactive={<img src={fav} className={'d-block ml-auto'} height="14" width="16" alt="Add to favorite"/>}>
                <CardInfoInner label={'Director'} value={item.director}/>
                <CardInfoInner label={'INN'} value={item.inn}/>
            </ListCard>)))
    }
}

export default ResponsiveTable;
