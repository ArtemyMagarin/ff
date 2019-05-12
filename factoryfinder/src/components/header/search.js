import React, { useState } from 'react';

const Search = (props) => {

    let [focused, setFocused] = useState(false);
    let [query, setQuery] = useState('');


    
    return (<React.Fragment>
        <div className={`input-group search-input-group${focused||props.searching ? ' active' : ''}`}>
          <input type="text" className="form-control" aria-describedby="search-button" 
              value={query}
              onChange={(event)=>{setQuery(event.target.value)}}
              onFocus={()=>{setFocused(true)}} 
              onBlur={()=>{setFocused(false)}}
            />
          <div className="input-group-append">
            <button className="btn" type="button" id="search-button" onClick={() => {props.sendQuery(query)}} >
                {props.searching ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : 'Search'}
            </button>
          </div>
        </div>
    </React.Fragment>)
}

export default Search;