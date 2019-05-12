import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as companiesListActions from '../actions/companiesListActions';

import Table from './Table';
import FilterSection from './FilterSection';
import page from '../styles/page.css';


function mapStateToProps(state) {
    return {
        currentCompaniesList: state.companiesListReducer.currentCompaniesList,
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

        if (this.props.fetchingPending) {
            return (<p>Fetching</p>)
        }

        if (this.props.fetchingError) {
            return (<p>Fetching error</p>)
        }

        if (this.props.currentCompaniesList.length === 0) {
            return (<p>Empty list</p>)
        }

        return (
        <div className="row mt-4">
            <div className="col-9">
                <h4 className="ff-title">Search results</h4>
                <Table 
                    head={['', (<span className="arrow-down">Name</span>), 'Director', 'INN']}
                    body={this.props.currentCompaniesList.map((item, key) => <Row key={key} {...item} onClick={()=>{this.props.history.push(`/companies/${item.id}`)}}/>)}
                />
            </div>
            <div className="col-3">
                <div id="filter-column" className="filter-column">
                    <FilterSection />
                </div>
            </div>
        </div>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompaniesList)
