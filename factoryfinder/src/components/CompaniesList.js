import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as companiesListActions from '../actions/companiesListActions';

import Table from './Table';
import FilterSection from './FilterSection';
import Company from './Company';

import page from '../styles/page.css';


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
            <td></td>
            <td>{props.company_name||'N/A'}</td>
            <td className="ff-text-muted">{props.director||'N/A'}</td>
            <td className="ff-text-muted">{props.inn||'N/A'}</td>
        </tr>
    )
}

class CompaniesList extends Component {
    

    componentDidMount() {
        this.props.companiesListActions.fetchCompanies();
    }

    render() {
        const retry = (null);
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
            <div className="col-9">
                <h4 className="ff-title">{message}</h4>
                <Table 
                    head={['', (<span className="arrow-down">Name</span>), 'Director', 'INN']}
                    body={this.props.currentCompaniesList.map((item, key) => <Row key={key} {...item} onClick={()=>{this.props.history.push(`/companies/${item.id}`)}}/>)}
                />
            </div>
            <div className="col-3">
                <div id="filter-column" className="filter-column">
                    <FilterSection loading={this.props.fetchingPending}/>
                </div>
            </div>
            {company && <Company history={this.props.history} {...company} />}
        </div>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompaniesList)
