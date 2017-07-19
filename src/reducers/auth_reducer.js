import { AUTH_USER, AUTH_MESSAGE } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case AUTH_USER: {
            return { ...state, authenticated: true };
        }

        case AUTH_MESSAGE: {
            return { ...state, msgObject: action.payload };
        }
        default: return state;
    }
}