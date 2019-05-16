import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as companiesListActions from '../actions/companiesListActions';
import ResponsiveTable from './Table';
import FilterSection from './FilterSection';
import Company from './Company';

import fav from '../heart-thin.svg';
import cross from '../cross.svg';


import '../styles/page.css';


function mapStateToProps(state) {
    return {
        currentCompaniesList: state.companiesListReducer.currentCompaniesList,
        allCompaniesList: state.companiesListReducer.allCompaniesList,
        fetchingPending: state.companiesListReducer.pending,
        fetchingError: state.companiesListReducer.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        companiesListActions: bindActionCreators(companiesListActions, dispatch),
    }
}

const Row = (props) => {
    return (
        <tr onClick={()=>{props.onClick()}}>
            <td><img src={fav} className={'d-block mx-auto'} height="14" width="16" alt="Add to favorite"/></td>
            <td>{props.company_name||'N/A'}</td>
            <td title={props.director||'Director is not specified'} className="ff-text-muted"><span className="td-inner text-truncate">{props.director||'N/A'}</span></td>
            <td className="ff-text-muted">{props.inn||'N/A'}</td>
        </tr>
    )
}

class CompaniesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilterSection: true,
        }
    }
    
    showFilter() {
        this.setState({showFilterSection: true})
    }

    hideFilter() {
        this.setState({showFilterSection: false})
    }

    toggleFilter() {
        this.setState({showFilterSection: !this.state.showFilterSection})
    }

    componentDidMount() {
        this.props.companiesListActions.fetchCompanies();
    }

    render() {
        let message = 'Search results';
        if (this.props.fetchingPending) {
            message = 'Searching...';
        } else if (this.props.fetchingError) {
            message = 'Searching error';
        } else if (this.props.currentCompaniesList.length === 0) {
            message = 'Empty response';
        }

        const company = this.props.match.params.number && this.props.allCompaniesList.filter(item => item.id=== +this.props.match.params.number)[0]

        return (
        <div className="row mt-4">
            <div className="col-12 col-lg-9">
                <div className={'d-flex justify-content-between align-items-baseline mb-3'}>
                    <h4 className="ff-title mb-0 d-inline">{message}</h4>
                    <a href="#" className="mb-0 d-lg-none text-decoration-none" onClick={e => {this.toggleFilter()}}>
                        {this.state.showFilterSection ? 'Hide filter' : 'Show filter'}
                    </a>
                </div>
                <ResponsiveTable 
                    head={['', (<span className="arrow-down">Name</span>), 'Director', 'INN']}
                    body={this.props.currentCompaniesList.map((item, key) => <Row key={key} {...item} onClick={()=>{this.props.history.push(`/companies/${item.id}`)}}/>)}
                    mobileData={this.props.currentCompaniesList}
                    onCardClick={(id)=>{this.props.history.push(`/companies/${id}`)}}
                />
            </div>
            <div id="filter-column" className={`col-lg-3 filter-column ${this.state.showFilterSection ? '' : 'd-none d-lg-block'}`}>
                <div className="d-flex d-lg-none justify-content-between align-items-baseline mt-2 mb-3">  
                    <h5 className={'d-inline mb-0'}>Filters</h5>
                    <button type="button" className="close" aria-label="Close" onClick={()=>{this.hideFilter()}}>
                        <span aria-hidden="true"><img src={cross} alt="Close button" height='24' width='24'/></span>
                    </button>
                </div>
                <FilterSection loading={this.props.fetchingPending}/>
            </div>
            {company && <Company onClose={()=>{this.props.history.push(`/companies`)}} {...company} />}
        </div>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompaniesList)
