import { AUTH_USER, AUTH_MESSAGE, UNAUTH_USER } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case AUTH_USER: {
            return { ...state, msgObject: null, authenticated: true };
        }

        case AUTH_MESSAGE: {
            return { ...state, msgObject: action.payload };
        }

        case UNAUTH_USER: {
            return { ...state, authenticated: false }
        }
        default: return state;
    }
}