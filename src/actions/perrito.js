import { perrito as perritoTypes } from '../constants/actionTypes';

export const setLoading = (loading) => async(dispatch) => {
    dispatch({
        type: perritoTypes.LOADING,
        payload: loading
    });
};

export const setList = (list) => async(dispatch) => {
    dispatch({
        type: perritoTypes.SET_LIST,
        payload: list
    });
};

export const setSelectedPerrito = (dog) => async(dispatch) => {
    dispatch({
        type: perritoTypes.SET_SELECTED_PERRITO,
        payload: dog
    });
};

export default {
    setLoading,
    setList,
    setSelectedPerrito
}