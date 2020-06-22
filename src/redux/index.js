import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { SET_ERR, GET_ISSUES, ADD_ISSUES, EDIT_ISSUES } from './Actions';

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
			case ADD_ISSUES:
				return {
					...state,
					
					issues: [...state.issues, action.payload],
				};
				case EDIT_ISSUES:
			const newIssuesArray = state.issues.filter(issue => issue.id !== action.payload.id);
			return {
				...state,
				issues: [...newIssuesArray, action.payload],
			};

		default:
			return state;
	}
};



const store = createStore(reducer, applyMiddleware(thunk));
console.log('THIS IS THE STORE!', store.getState())
export default store
