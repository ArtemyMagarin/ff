import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as companiesListActions from '../actions/companiesListActions';

import Company from './Company'
import { Spinner } from './common'


function mapStateToProps(state) {
    return {
        selectedCompany: state.companiesListReducer.selectedCompany,
        fetchingPending: state.companiesListReducer.pending,
        fetchingError: state.companiesListReducer.error,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        companiesListActions: bindActionCreators(companiesListActions, dispatch),
    }
}



class SingleCompany extends Component {

    componentDidMount() {
        this.props.companiesListActions.fetchCompany(this.props.match.params.number);
    }

    render() {
        const company = this.props.selectedCompany
        return (
        <React.Fragment>
            {this.props.fetchingPending && (<div className={'mt-5'}><Spinner/></div>)}
            {this.props.fetchingError && (
                <React.Fragment>
                    <h4 className="ff-title mt-5 mb-2">Sorry, company does not exist</h4>
                    <Link to="/companies">Show the whole list of available companies</Link>
                </React.Fragment>
             )}
            {company && <Company className={'w-100'} onClose={()=>{this.props.history.push(`/companies`)}} {...company} />}
        </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCompany)

