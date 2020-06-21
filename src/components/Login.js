import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Actions'
import * as yup from 'yup';

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const schema = yup.object().shape({
		email: yup.string().required('email is required'),

		password: yup.string().required('Please enter a password').min(6),
	});

	useEffect(() => {
		schema.isValid(formData).then((valid) => {
			setButtonDisabled(!valid);
		});
	}, [formData, schema]);


	const submit = () => {
		schema.validate(formData).then(() => {
			dispatch(login(formData))
		});
	};
	const handleChanges = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}
	return (
		<>
			<div className="iform">
				<Form
					onSubmit={(event) => {
						event.preventDefault();
						submit();
						setFormData({
							email: '',
							password: '',
						});
					}}
					style={{ margin: '5%' }}
				>
					<h2>Please Login</h2>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							placeholder="enter your email"
							value={formData.email}
							onChange={handleChanges}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							name="password"
							placeholder="enter your password..."
							value={formData.password}
							onChange={handleChanges}
						/>
					</FormGroup>
					<Button className="btn" disabled={buttonDisabled}>
						Login
					</Button>
				</Form>
			</div>
		</>
	);
};

export default LoginForm;
