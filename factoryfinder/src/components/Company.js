import React, { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import FilterCard from './FilterCard';
import '../styles/product.css';
import cross from '../cross.svg';


export const CardInfoInner = props => (
    <div className="row mb-2">
        <div className="col-4 ff-text-muted">{props.label}</div>
        <div className="col-8">{props.value || 'N/A'}</div>
    </div>
)

const Company = props => {

    useEffect(()=>{
        const pageElement = document.querySelector('.company-page')
        disableBodyScroll(pageElement)
        return () => { enableBodyScroll(pageElement); clearAllBodyScrollLocks() }
    }, [])


    return (<div className="company-page">
        <div className="inner">
            <button type="button" className="close" aria-label="Close" onClick={()=>{props.onClose()}}>
              <span aria-hidden="true"><img src={cross} alt="Close button" height='24' width='24'/></span>
            </button>

            <h2 className="title">{props.company_name}</h2>
            <h5 className="summary">{props.summary}</h5>
            <p className="description">{props.description}</p>
            <div className="buttons">
                <button type="button" className="btn ff-btn-primary">Place order</button>
                <button type="button" className="btn ff-btn-secondary">Download price list</button>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <FilterCard cardTitle={'Company details'}>
                        <CardInfoInner label={'Director'} value={props.director}/>
                        <CardInfoInner label={'Year'} value={props.year}/>
                        <CardInfoInner label={'Size'} value={props.size}/>
                        <CardInfoInner label={'Legal address'} value={props.legal_address}/>
                    </FilterCard>
                </div>
                <div className="col-12 col-lg-6">
                    <FilterCard cardTitle={'Contacts'}>
                        <CardInfoInner label={'Phone'} value={props.phone}/>
                        <CardInfoInner label={'Email'} value={props.email}/>
                        <CardInfoInner label={'Site'} value={props.site && <a href={props.site} target="_blank" rel="noopener noreferrer">{props.site}</a>}/>
                    </FilterCard>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Regions'}>
                        {props.regions.map((item, i) => (<React.Fragment key={i}>
                           <a href="#">{item}</a>
                           {(i+1)!==props.regions.length&&', '}
                        </React.Fragment>))} 
                    </FilterCard>
                </div>
            </div>
            {/*
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Product Images'}>
                        
                    </FilterCard>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Employees'}></FilterCard>
                </div>
            </div>
            */}
            <div className="row">
                <div className="col-12 col-lg-6">
                    <FilterCard cardTitle={'Legal details'}>
                        <CardInfoInner label={'Inn'} value={props.inn}/>
                        <CardInfoInner label={'Kpp'} value={props.kpp}/>
                        <CardInfoInner label={'Ogrn'} value={props.ogrn}/>
                        <CardInfoInner label={'Okpo'} value={props.okpo}/>
                        <CardInfoInner label={'Okved'} value={props.okved}/>
                    </FilterCard>
                </div>
                <div className="col-12 col-lg-6">
                    <FilterCard cardTitle={'Banking details'}>
                        <CardInfoInner label={'Account'} value={props.account}/>
                        <CardInfoInner label={'Account cor'} value={props.account_cor}/>
                        <CardInfoInner label={'Bank ID'} value={props.bank_bin}/>
                        <CardInfoInner label={'Bank'} value={props.bank}/>
                    </FilterCard>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Categories'}>
                       {props.rubrics.map((item, i) => (<React.Fragment key={i}>
                           <a href="#">{item}</a>
                           {(i+1)!==props.rubrics.length&&', '}
                        </React.Fragment>))}     
                    </FilterCard>
                </div>
            </div>
        </div>
    </div>)
}

export default Company;

