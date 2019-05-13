import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './store';
import history from './history';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import main from './styles/main.css';

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
