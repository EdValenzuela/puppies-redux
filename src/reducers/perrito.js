import { perrito as perritoActions } from '../constants/actionTypes';

const INITIAL_STATE = {
    loading: false,
    list: [],
    selectedPerrito: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case perritoActions.LOADING: {
            return { ...state, loading: action.payload }
        }
        case perritoActions.SET_SELECTED_PERRITO: {
            return { ...state, selectedPerrito: action.payload }
        }
        case perritoActions.SET_LIST: {
            return { ...state, list: action.payload }
        }
        default:
            return state;
    }
}