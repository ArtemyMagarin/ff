import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FavoritesList from './FavoritesList';
import CompaniesList from './CompaniesList';


const Main = (props) => (
    <React.Fragment>
        <main>
            <div className="container">
                <Switch>
                    <Route exact path={'/companies'} render={(props) => (<CompaniesList {...props}/>)}/>
                    <Route path={'/companies/:number'} render={(props) => (<CompaniesList {...props}/>)}/>
                    <Route exact path={'/favorites'} render={(props) => (<FavoritesList {...props}/>)}/>
                    <Route path={'/favorites/:number'} render={(props) => (<FavoritesList {...props}/>)}/>
                </Switch>
            </div>
        </main>
    </React.Fragment>
)

export default Main;
