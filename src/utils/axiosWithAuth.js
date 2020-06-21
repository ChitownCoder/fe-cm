import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		// config object
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
		baseURL: 'https://community-issues.herokuapp.com/api',
	});
};

export default axiosWithAuth;
