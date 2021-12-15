import { user as userActions } from '../constants/actionTypes';

const INITIAL_STATE = {
    loading: false,
    authUser: null,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActions.LOADING: {
            return { ...state, loading: action.payload }
        }
        case userActions.SET_USER: {
            return { ...state, authUser: action.payload }
        }
        case userActions.ERROR: {
            return { ...state, error: action.payload }
        }
        default:
            return state;
    }
}