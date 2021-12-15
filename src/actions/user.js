import { user as userTypes } from '../constants/actionTypes';
import { login as doLogin } from '../mockRequests/usuarios'

export const setLoading = (loading) => async(dispatch) => {
    dispatch({
        type: userTypes.LOADING,
        payload: loading
    });
};

export const login = (username, password) => async(dispatch) => {
    await dispatch(setLoading(true));
    const user = await doLogin(username, password);

    if(user.error){
        dispatch({
            type: userTypes.ERROR,
            payload: user.error
        });
    }else{
        dispatch({
            type: userTypes.SET_USER,
            payload: user
        });
    }

    await dispatch(setLoading(false));
};

export default {
    setLoading,
    login,
}