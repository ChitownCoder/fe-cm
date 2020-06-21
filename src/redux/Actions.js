import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import {history} from '../index'

export const SET_ERR = 'SET_ERR';

export const login = (creds, props) => (dispatch) => {
	axiosWithAuth()
		.post('/login', creds)
		.then((res) => {
			console.log(res.data);
			localStorage.setItem('token', res.data);

			history.push(`/dash/${res.data.id}`);
		})
		
		.catch((error) => {
	dispatch({ type: SET_ERR, payload: 'Login FAILED!' });
})}

export const signup = (newUser) => (dispatch) => {
	axios
		.post('https://co-make-9cf46.web.app/api/register', newUser)
		.then((res) => {
			// console.log(res);
			history.push('/login');
		})
		.catch((error) => console.log('Access DENIED....', error));
	dispatch({ type: SET_ERR, payload: 'Login FAILED!' });
};
