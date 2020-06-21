import axiosWithAuth from '../utils/axiosWithAuth';
import { history } from '../index';

export const SET_ERR = 'SET_ERR';
export const GET_ISSUES = 'GET_ISSUES';

export const login = (creds, props) => (dispatch) => {
	axiosWithAuth()
		.post('/auth/login', creds)
		.then((res) => {
			console.log(res.data);
			localStorage.setItem('token', res.data.token);
			history.push(`/dash/${res.data.user_id}`);
		})

		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'Login FAILED!' });
		});
};

export const signup = (newUser) => (dispatch) => {
	axiosWithAuth()
		.post('/auth/register', newUser)
		.then((res) => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			history.push(`/dash/${res.data.user_id}`);
		})
		.catch((error) => {
	dispatch({ type: SET_ERR, payload: 'Login FAILED!' });
})
}
export const getIssues = () => (dispatch) => {
	axiosWithAuth()
		.get('/issue')
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_ISSUES, payload: res });
	})
		.catch((error) => {
	dispatch({ type: SET_ERR, payload: 'NO Issues Found!' });
})
}
