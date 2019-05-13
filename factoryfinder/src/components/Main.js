import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResults from './search';
import FavoritesList from './FavoritesList';

const Main = (props) => (
    <React.Fragment>
        <main>
            <div className="container">
                <Switch>
                    <Route path='/companies' component={SearchResults}/>
                    <Route exact path='/favorites' render={() => (<FavoritesList {...props}/>)}/>
                    <Route path='/favorites/:number' render={(props) => (<FavoritesList {...props}/>)}/>
                </Switch>
            </div>
        </main>
    </React.Fragment>
)

export default Main;
