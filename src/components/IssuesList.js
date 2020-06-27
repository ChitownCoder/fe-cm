import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIssues, getUsers,getMyState } from '../redux/Actions';
import {Row, Col} from 'reactstrap'
import { useParams } from 'react-router';
import IssuesCard from './IssuesCard';

const IssuesList = () => {
	const id = localStorage.getItem('user_id');

	const newIssue = useSelector((state) => state.issues);
	// const user = useSelector((state) => state.users);
	const dispatch = useDispatch();
	// const [stateIssues, setStateIssues] = useState([]);
// const {id} = useParams()



	useEffect(() => {
		dispatch(getMyState(id))
		// dispatch(getIssues());
		// dispatch(getUsers(id));
		// const myStateArray = newIssue.filter((issue) => issue.state === user.state);
		// setStateIssues(myStateArray);

		// eslint-disable-next-line
	}, [dispatch]);

	console.log(newIssue);
	return (
		<Row>
			{newIssue.map((info, index) => {
				return (
					<Col key={index} lg ='4'>
					<div >
						<IssuesCard
							id={info.id}
							name={info.name}
							desc={info.desc}
							state={info.state}
							zip={info.zip}
							image={info.image}
							/>
					</div>
					</Col>
				);
			})}
		</Row>
	);
};

export default IssuesList;
