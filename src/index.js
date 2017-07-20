import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import './index.css';
import App from './App';
import Header from './components/header';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import RequireAuth from './components/require_auth';
import history from './components/history';
import { AUTH_USER } from './actions/types';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

if(localStorage.getItem('token')) {
    store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
<Provider store={ store }>
    <Router history={ history }>
        <div>
            <Header />
            <Switch>
                <Route path="/signin" component={ Signin } />
                <Route path="/signout" component={ RequireAuth(Signout) } />
                <Route path="/" component={ App } />
            </Switch>
        </div>
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
