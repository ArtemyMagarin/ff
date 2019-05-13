import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResults from './search';

const Main = (props) => (
    <React.Fragment>
        <main>
            <div className="container">
                <Switch>
                    <Route path='/companies' component={SearchResults}/>
                </Switch>
            </div>
        </main>
    </React.Fragment>
)

export default Main;
