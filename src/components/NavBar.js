import React from 'react';
import {history} from '../index'
import { Button, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const NavBar = () => {
	
	const logout = () => {
		localStorage.removeItem('token');
		history.push('/login')
	};

	return (
		<div>
			<Navbar className="navbar">
				<a href="https://christianbautista-buildweek-unit1.netlify.app/#">
					<img src={logo} alt="Logo" />
				</a>

				<div>
					<Link to="/">
						<Button className="btn">Sign Up</Button>
					</Link>
					<Link to="/login">
						<Button className="btn">Login</Button>
					</Link>
					<Button onClick={logout} className="btn">
						LogOut
					</Button>
				</div>
			</Navbar>
		</div>
	);
};

export default NavBar;
