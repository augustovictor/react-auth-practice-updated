import { AUTH_USER, AUTH_MESSAGE } from './types';
import axios from 'axios';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const ROOT_URL = 'http://localhost:4000';

export function authUser(user) {
    return dispatch => {
        axios.post(ROOT_URL + '/login', user)
        .then(response => {
            dispatch({ type: AUTH_USER });
            dispatch(authMessage('Logged in successfully'));
            localStorage.setItem('token', response.data.tokens[0].token);
            history.push('/');
        }).catch(err => {
            dispatch(authMessage(err.response.data))
        });
    }
}

export function authMessage(message) {
    return {
        type: AUTH_MESSAGE,
        payload: message
    }
}