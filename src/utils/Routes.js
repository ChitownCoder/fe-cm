import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../components/Login';
import Signup from '../components/SignupForm';
import Newsfeed from '../components/Newsfeed';
import UserDash from '../components/UserDash';



const Routes = () => {
	return (
		<div>
			<ProtectedRoute path="/feed" component={Newsfeed } />
			<ProtectedRoute path=  '/dash/:id' component={UserDash } />

			<Route exact path="/" component={Signup }/>
			<Route path="/login" component={Login}  />
		</div>
	);
};

export default Routes;
