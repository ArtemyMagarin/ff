import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './store';
import history from './history';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
