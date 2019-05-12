import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as filterActions from '../actions/filterActions';

import FilterCard from './FilterCard';

function mapStateToProps(state) {
    return {
        filter: state.filterReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //companiesListActions: bindActionCreators(companiesListActions, dispatch),
    }
}

const Checkbox = props => {
    const [checked, setChecked] = useState(!!props.checked);
    const uniqId = String(Math.random()*Math.random()+Math.random()*Math.random());

    return (
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={checked} onClick={()=>{setChecked(!checked)}} id={uniqId}/>
          <label className="form-check-label" htmlFor={uniqId}>
            {props.children}
          </label>
        </div>)
}

class FilterSection extends Component {
    render() {
        return (<React.Fragment>
            <FilterCard canExpand={true} cardTitle={'Categories'}>
                {['test1', 'test2', 'test3','test1', 'test2', 'test3'].map((item,id) => (<Checkbox key={id}>{item}</Checkbox>))}
            </FilterCard>
            <FilterCard canExpand={true} cardTitle={'Region'}>
                {['test1', 'test2', 'test3','test1', 'test2', 'test3'].map((item,id) => (<Checkbox key={id}>{item}</Checkbox>))}
            </FilterCard>
            <FilterCard cardTitle={'Score'}>
                <div className="form-inline">
                    <div className="input-group w-50">
                      <div className="input-group-prepend">
                        <span className="input-group-text pl-0 border-0 bg-transparent" id="from-addon">From</span>
                      </div>
                      <input type="number" className="form-control-plaintext" value="1" aria-label="from" aria-describedby="from-addon"/>
                    </div>
                    <div className="input-group w-50">
                      <div className="input-group-prepend">
                        <span className="input-group-text pl-0 border-0 bg-transparent" id="to-addon">To</span>
                      </div>
                      <input type="number" className="form-control-plaintext" value="228" aria-label="to" aria-describedby="to-addon"/>
                    </div>
                </div>
            </FilterCard>
        </React.Fragment>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSection)
