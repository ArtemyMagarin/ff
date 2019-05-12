import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchResults from './search';

const Home = (props) => <p>Home</p>

const Main = (props) => (
    <main>
        <div className="container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/companies' component={SearchResults}/>
            </Switch>
        </div>
    </main>
    )

export default Main;
