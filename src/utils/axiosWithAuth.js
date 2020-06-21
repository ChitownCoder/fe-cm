import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		// config object
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
		baseURL: 'https://co-make-9cf46.web.app/api',
	});
};

export default axiosWithAuth;
