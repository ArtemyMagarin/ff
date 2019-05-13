import React, { useState } from 'react';
import store from '../../store';
import history from '../../history';
import {addFilter} from '../../actions/companiesListActions';

const Search = (props) => {

    let [focused, setFocused] = useState(false);
    let [query, setQuery] = useState('');
    
    return (<React.Fragment>
        <div className={`input-group search-input-group${focused||props.searching ? ' active' : ''}`}>
          <input type="text" className="form-control" aria-describedby="search-button" 
              value={query}
              onChange={(event)=>{setQuery(event.target.value); store.dispatch(addFilter('query', event.target.value))}}
              onFocus={()=>{setFocused(true)}} 
              onBlur={()=>{setFocused(false)}}
            />
          <div className="input-group-append">
            <button className="btn" type="submit" id="search-button" onClick={() => {history.push('/companies')}}>
                {props.searching ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : 'Search'}
            </button>
          </div>
        </div>
    </React.Fragment>)
}

export default Search;