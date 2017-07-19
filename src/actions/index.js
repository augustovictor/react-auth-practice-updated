import { AUTH_USER, AUTH_MESSAGE, UNAUTH_USER } from './types';
import axios from 'axios';

import history from '../components/history';

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

export function unauthUser() {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({ type: UNAUTH_USER });
        dispatch(authMessage('Successfully logged out.'))
    }
}

export function authMessage(msgObject) {
    return {
        type: AUTH_MESSAGE,
        payload: msgObject
    }
}