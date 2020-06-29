import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addIssues, getMyState } from '../../redux/Actions';
import { useParams } from 'react-router-dom';
import { history } from '../../index.js'

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

const Add = ({ setToggle }) => {
	// const id = localStorage.getItem('user_id');

	const { id } = useParams();
	console.log(id);
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: '',
		desc: '',
		image: '',
		state: 'Alabama',
		zip: '',
	});

	const submit = (e) => {
		e.preventDefault();
		dispatch(addIssues(formData));
		setFormData({
			name: '',
			desc: '',
			image: '',
			state: '',
			zip: '',
		});
		dispatch(getMyState(id));
		setToggle(false);
		history.push(`/dash/${id}`)

	};

	const handleChanges = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<div className="iform">
				<Form onSubmit={submit} style={{ margin: '5%' }}>
					<h2>Add an Issue</h2>
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
						<Label for="image">Image</Label>
						<Input
							required
							name="image"
							placeholder="add more info..."
							value={formData.image}
							onChange={handleChanges}
						/>
					</FormGroup>
					<Button className="btn">Add</Button>
				</Form>

				<Button style={{ height: '45px' }} onClick={() => setToggle(false)}>
					X
				</Button>
			</div>
		</div>
	);
};

export default Add;
