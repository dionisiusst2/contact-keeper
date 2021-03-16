import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
		case REGISTER_FAIL:
		case USER_LOADED:
		case LOGIN_SUCCESS:
		case LOGIN_FAIL:
		case AUTH_ERROR:
		case LOGOUT:
		case CLEAR_ERRORS:
		default:
			return state;
	}
};

export default authReducer;
