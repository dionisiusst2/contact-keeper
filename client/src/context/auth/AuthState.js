import React, {useReducer} from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import AuthContext from './authContext';
import setAuthToken from '../../utils/setAuthToken';
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

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		user: null,
		isAuthenticated: null,
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const loadUser = async () => {
		// @todo - load token into global headers\
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get('/api/auth');

			dispatch({type: USER_LOADED, payload: res.data});
		} catch (err) {
			dispatch({type: AUTH_ERROR});
		}
	};

	const register = async (formData) => {
		const config = {
			headers: {'Content-Type': 'application/json'},
		};

		try {
			const res = await axios.post('/api/users', formData, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (err) {
			console.log('error');
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const login = async (formData) => {
		const config = {
			headers: {'Content-Type': 'application/json'},
		};

		try {
			const res = await axios.post('/api/auth', formData, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (err) {
			console.log('error');
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const logout = () => {
		dispatch({type: LOGOUT});
	};

	const clearErrors = () => {
		dispatch({
			type: CLEAR_ERRORS,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				login,
				logout,
				clearErrors,
				loadUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
