import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signup } from '../redux/Actions'
import * as yup from 'yup';



const SignupForm = () => {
	const dispatch = useDispatch();
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		zip: '',
	});
	const schema = yup.object().shape({
		name: yup.string().required('Name is required').min(2),
		email: yup.string().required('email is required'),
		zip: yup.string().required('Must enter a valid zip').min(5),
		password: yup.string().required('Please enter a password').min(6),
	});

	useEffect(() => {
		schema.isValid(formData).then((valid) => {
			setButtonDisabled(!valid);
		});
	}, [formData, schema]);



	
	const submit = () => {
		schema.validate(formData).then(() => {

			dispatch(signup(formData))
			setFormData({	
				name: '',
			email: '',
			password: '',
			zip: '',
		})

		});
	};
	const handleChanges = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<>
			<div className="sform">
				<Form
					onSubmit={(event) => {
						event.preventDefault();
						submit();
						setFormData({
							name: '',
							email: '',
							password: '',
							zip: '',
						});
					}}
					style={{ margin: '5%' }}
				>
					<h2>Please sign up for access</h2>
					<FormGroup>
						<Label for="name">Name</Label>
						<Input
							name="name"
							id="name"
							placeholder="name"
							value={formData.name}
							onChange={handleChanges}
						/>
					</FormGroup>

					

					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							placeholder="email"
							value={formData.email}
							onChange={handleChanges}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="zip">Zip Code</Label>
						<Input
							name="zip"
							placeholder="zip"
							value={formData.zip}
							onChange={handleChanges}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							name="password"
							placeholder="password"
							value={formData.password}
							onChange={handleChanges}
						/>
					</FormGroup>
					<Button className="btn" disabled={buttonDisabled}>
						Sign Up!
					</Button>
				</Form>
			</div>
		</>
	);
};

export default SignupForm;
