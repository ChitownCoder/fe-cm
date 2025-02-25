import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
	SET_ERR,
	GET_ISSUES,
	ADD_ISSUES,
	EDIT_ISSUES,
	GET_USERS,
	GET_MY_STATE,
} from './Actions';

const initialState = {
	issues: [],
	users: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERR:
			return {
				...state,
				error: action.payload,
			};
		case GET_ISSUES:
			return {
				...state,
				issues: action.payload,
			};
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			};

		case ADD_ISSUES:
			return {
				...state,
				issues: [...state.issues, action.payload],
			};
		case EDIT_ISSUES:
			const newIssuesArray = state.issues.filter(
				(issue) => issue.id !== action.payload.id
			);
			return {
				...state,
				issues: [...newIssuesArray, action.payload],
			};

			case GET_MY_STATE:
			return {
				...state,
				issues: action.payload,
			};

		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
