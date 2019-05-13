import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as companiesListActions from '../actions/companiesListActions';

import Table from './Table';
import FilterSection from './FilterSection';
import Company from './Company';

import fav from '../heart-filled.svg';


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
            <td>{props.company_name||'N/A'}</td>
            <td className="ff-text-muted">{props.director||'N/A'}</td>
            <td className="ff-text-muted">{props.inn||'N/A'}</td>
            <td><img src={fav} height="14" width="16" alt="Add to favorite"/></td>
        </tr>
    )
}

class FavoritesList extends Component {
    

    componentDidMount() {
        this.props.companiesListActions.fetchCompanies();
    }

    render() {
        let message = 'Favorites';
        if (this.props.fetchingPending) {
            message = 'Fetching...';
        } else if (this.props.fetchingError) {
            message = 'Fetching error';
        } else if (this.props.currentCompaniesList.length === 0) {
            message = 'No favorite companies yet';
        }

        const company = this.props.match.params.number && this.props.allCompaniesList.filter(item => item.id=== +this.props.match.params.number)[0]

        return (
        <div className="row mt-4">
            <div className="col-12">
                <div className="d-flex justify-content-between mb-4">
                    <h4 className="ff-title mb-0">{message}</h4>
                    <button role='button' className="btn ff-btn-primary">Place order</button>
                </div>
                <Table 
                    head={[(<span className="arrow-down">Name</span>), 'Director', 'INN', '']}
                    body={this.props.currentCompaniesList.map((item, key) => <Row key={key} {...item} onClick={()=>{this.props.history.push(`/favorites/${item.id}`)}}/>)}
                />
            </div>
            {company && <Company onClose={()=>{this.props.history.push(`/favorites`)}} {...company} />}
        </div>)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesList)
