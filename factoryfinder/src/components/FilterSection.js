import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as companiesListActions from '../actions/companiesListActions';

import FilterCard from './FilterCard';

function mapStateToProps(state) {
    return {
        lists: state.companiesListReducer.lists,
        filter: state.companiesListReducer.filter,
        currentCompaniesList: state.companiesListReducer.allCompaniesList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(companiesListActions, dispatch),
    }
}

const Checkbox = props => {
    // const uniqId = String(Math.random()*Math.random()+Math.random()*Math.random());
    return (
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onClick={(event)=>{ event.target.checked ? props.onCheck() : props.onUncheck()}} id={`checkbox-${props.prefix}${props.id}`}/>
          <label className="form-check-label" htmlFor={`checkbox-${props.prefix}${props.id}`}>
            {props.children}
          </label>
        </div>)
}

class FilterSection extends Component {

    shouldComponentUpdate() {
        return this.props.currentCompaniesList.length === 0
    }

    render() {        
        let categories = this.props.lists.allCategories;
        let regions = this.props.lists.allRegions;
        let scores = this.props.lists.allScores;

        const spinner = (<div className="d-flex justify-content-center ff-text-brand-blue">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>)

        console.log('RENDER')
        return (<React.Fragment>
            <FilterCard canExpand={true} cardTitle={'Categories'}>
                {this.props.loading ? spinner : categories.map((item,id) => (<Checkbox key={id} id={id} prefix={'category'} onCheck={()=>{this.props.filterActions.addFilter('categories', item)}} onUncheck={()=>{this.props.filterActions.excludeFilter('categories', item)}}>{item}</Checkbox>))}
            </FilterCard>
            <FilterCard canExpand={true} cardTitle={'Region'}>
                {this.props.loading ? spinner : regions.map((item,id) => (<Checkbox key={id} id={id} prefix={'region'} onCheck={()=>{this.props.filterActions.addFilter('regions', item)}} onUncheck={()=>{this.props.filterActions.excludeFilter('regions', item)}}>{item}</Checkbox>))}
            </FilterCard>
            <FilterCard cardTitle={'Score'}>
                <div className="form-inline">
                    <div className="input-group w-50">
                      <div className="input-group-prepend">
                        <span className="input-group-text pl-0 border-0 bg-transparent" id="from-addon">From</span>
                      </div>
                      <input type="number" className="form-control-plaintext" value={this.props.filter.minScore||0} onChange={(event)=>{this.props.filterActions.addFilter('minScore', +event.target.value)}} aria-label="from" aria-describedby="from-addon"/>
                    </div>
                    <div className="input-group w-50">
                      <div className="input-group-prepend">
                        <span className="input-group-text pl-0 border-0 bg-transparent" id="to-addon">To</span>
                      </div>
                      <input type="number" className="form-control-plaintext" value={this.props.filter.maxScore||0} onChange={(event)=>{this.props.filterActions.addFilter('maxScore', +event.target.value)}} aria-label="to" aria-describedby="to-addon"/>
                    </div>
                </div>
            </FilterCard>
        </React.Fragment>);
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSection)
