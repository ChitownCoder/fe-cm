import axiosWithAuth from '../utils/axiosWithAuth';
import { history } from '../index';

export const SET_ERR = 'SET_ERR';
export const GET_ISSUES = 'GET_ISSUES';
export const ADD_ISSUES = 'ADD_ISSUES';
export const EDIT_ISSUES = 'EDIT_ISSUES';
export const GET_USERS = 'GET_USERS';
export const GET_MY_STATE = 'GET_MY_STATE';

export const login = (creds, props) => (dispatch) => {
	axiosWithAuth()
		.post('/auth/login', creds)
		.then((res) => {
			// console.log(res.data);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user_id', res.data.user_id);
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
			console.log(res.data);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user_id', res.data.user_id);
			history.push(`/dash/${res.data.user_id}`);
		})
		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'Login FAILED!' });
		});
};
export const getIssues = (getState) => (dispatch) => {
	axiosWithAuth()
		.get('/issues')
		.then((res) => {
			// console.log(res);
			dispatch({ type: GET_ISSUES, payload: res.data });
		})
		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'NO Issues Found!' });
		});
};
export const getUsers = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/user/${id}`)
		.then((res) => {
			// console.log(res);
			dispatch({ type: GET_USERS, payload: res.data });
		})
		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'NO Issues Found!' });
		});
};

export const addIssues = (newIssue) => (dispatch) => {
	axiosWithAuth()
		.post('/issues', newIssue)
		.then((res) => {
			dispatch({ type: ADD_ISSUES, payload: res.data });
		})
		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'NO Issues Added!' });
		});
};
export const editIssues = (editIssue, id) => (dispatch) => {
	axiosWithAuth()
		.put(`/issues/${id}`, editIssue)
		.then((res) => {
			dispatch({ type: EDIT_ISSUES, payload: res.data });
		})
		.catch((error) => {
			dispatch({ type: SET_ERR, payload: 'NO Issues Edited!' });
		});
};

export const getMyState = (id) => async (dispatch) => {
	let myStateArray;
	try {
		try {
			var issues = await axiosWithAuth().get(`/issues`);
			var users = await axiosWithAuth().get(`/user/${id}`);
			console.log('Issues', issues);
			console.log('Users', users);

			myStateArray = issues.data.filter(
				(issue) => issue.state === users.data.state
			);
		} catch (error) {
			dispatch({ type: SET_ERR, payload: 'NO Issues Edited!' });
		} finally {
			return dispatch({ type: GET_MY_STATE, payload: [...myStateArray] });
		}
	} catch (error) {
		dispatch({ type: SET_ERR, payload: 'NO Issues Edited!' });
	}
};
