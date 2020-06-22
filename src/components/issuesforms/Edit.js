import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { editIssues,  getIssues  } from '../../redux/Actions';

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];

const Edit = ({editIssue}) => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		
		name: editIssue.name,
		desc: editIssue.desc,
		image: editIssue.image,
		state: editIssue.state,
		zip: editIssue.zip,
	});

	const submit = (e) => {
		e.preventDefault();
		dispatch(editIssues(formData, editIssue.id));
		setFormData({
			name: '',
			desc: '',
			image: '',
			state: '',
			zip: '',
		});
		 dispatch(getIssues()) 
	};

	const handleChanges = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<div className="iform">
			<Form onSubmit={submit} style={{ margin: '5%' }}>
				<h2>Edit Issue</h2>
				<FormGroup>
					<Label for="name">Name</Label>
					<Input
						required
						type="name"
						name="name"
						placeholder="add a title..."
						value={formData.name}
						onChange={handleChanges}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="desc">Description</Label>
					<Input
						required
						name="desc"
						placeholder="add more info..."
						value={formData.desc}
						onChange={handleChanges}
					/>
				</FormGroup>

				<FormGroup>
					<Label for="state">state</Label>
					<Input
						type="select"
						name="state"
						id="state"
						value={formData.state}
						onChange={handleChanges}
					>
						{states.map((area, index) => (
							<option key={index}>{area}</option>
						))}
					</Input>
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
					<Label for="img">Image</Label>
					<Input
						required
						name="img"
						placeholder="add more info..."
						value={formData.image}
						onChange={handleChanges}
					/>
				</FormGroup>
				<Button className="btn">Add</Button>
			</Form>
		</div>
	);
};

export default Edit;
