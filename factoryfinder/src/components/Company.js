import React, { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import FilterCard from './FilterCard';
import '../styles/product.css';
import '../styles/employeecard.css';
import '../styles/productimages.css';
import cross from '../cross.svg';
import female from '../female.jpeg'
import male from '../male.jpeg'

import holderjs from 'holderjs'

import { Checkmark, Pill } from './common';

export const CardInfoInner = props => (
    <div className="row mb-2">
        <div className="col-4 ff-text-muted">{props.label}</div>
        <div className="col-8">{props.value || 'N/A'}</div>
    </div>
)

const EmployeeCard = props => {
    return (
        <div className="employee-card">
            <img src={props.avatar} alt="" className={'avatar'}/>
            <div className="employee-info">
                <p className="employee-card-text ff-text-bold">{props.name}</p>
                <p className="employee-card-text ff-text-muted">{props.role}</p>
                <p className="employee-card-text">{props.phone}</p>
                <a href={`mailto:${props.email}`} className="employee-card-text">{props.email}</a>
            </div>
        </div>
    )
}




const Company = props => {

    useEffect(()=>{
        const pageElement = document.querySelector('.company-page')
        disableBodyScroll(pageElement)
        return () => { enableBodyScroll(pageElement); clearAllBodyScrollLocks() }
    }, [])

    useEffect(()=>{
        holderjs.run({
            domain: 'holder.js',
            images: [...document.querySelectorAll('img.placeholder')],
            object: null,
            bgnodes: null,
            stylenodes: null
        });
    }, [])

    return (<div className={`company-page ${props.className||''}`}>
        <div className="inner">
            <button type="button" className="close" aria-label="Close" onClick={()=>{props.onClose()}}>
              <span aria-hidden="true"><img src={cross} alt="Close button" height='24' width='24'/></span>
            </button>

            <h2 className="title">
                {props.company_name}
                {props.is_Active && <Checkmark/>}
                <Pill>{props.score}</Pill>     
            </h2>
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
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Product Images'} canExpand={true} innerClass={'product-images-list-inner'}>
                        <div className="product-images-list">
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                            <img class="placeholder" src="holder.js/125x125" alt=""/>
                        </div>
                                

                    </FilterCard>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FilterCard cardTitle={'Employees'} canExpand={true} innerClass={'employees-inner'}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <EmployeeCard 
                                    avatar={female} 
                                    name={'Patricia Ford'} 
                                    role={'CEO'} 
                                    phone={'+7 921 123-45-67'} 
                                    email={'patricia@alfacomplect.ru'} 
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <EmployeeCard 
                                    avatar={male} 
                                    name={'Anthony Warren'} 
                                    role={'CTO'} 
                                    phone={'+7 921 123-45-67'} 
                                    email={'anthony@alfacomplect.ru'} 
                                />
                            </div>
                        </div>
                    </FilterCard>
                </div>
            </div>
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

