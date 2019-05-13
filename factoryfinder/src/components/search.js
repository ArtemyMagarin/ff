import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompaniesList from './CompaniesList';

const SearchResults = (props) => {
    return (
        <Switch>
            <Route exact path='/companies' render={() => (<CompaniesList {...props}/>)}/>
            <Route path='/companies/:number' render={(props) => (<CompaniesList {...props}/>)}/>
        </Switch>
    )
}

export default SearchResults;
