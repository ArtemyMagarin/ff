import React from 'react';
import Header from './components/header/header';
import Index from './components/Index';
import Main from './components/Main';

import { Switch, Route } from 'react-router-dom';



const App = () => {
  return (<React.Fragment>
    <Header />
    <Switch>
        <Route exact path='/' component={Index}/>
        <Route component={Main}/>
    </Switch>
  </React.Fragment>)
}

export default App;
