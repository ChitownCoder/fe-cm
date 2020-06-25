import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIssues, getUsers } from '../redux/Actions';
import { useParams } from 'react-router';
import IssuesCard from './IssuesCard';

const IssuesList = () => {
	const newIssue = useSelector((state) => state.issues);
	const user = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const [stateIssues, setStateIssues] = useState([]);
const {id} = useParams()



	useEffect(() => {
		dispatch(getIssues());
		dispatch(getUsers(id));
		const myStateArray = newIssue.filter((issue) => issue.state === user.state);
		setStateIssues(myStateArray);

		// eslint-disable-next-line
	}, [dispatch, user.state]);

	console.log(stateIssues);
	return (
		<div>
			{stateIssues.map((info, index) => {
				return (
					<div key={index}>
						<IssuesCard
							id={info.id}
							name={info.name}
							desc={info.desc}
							state={info.state}
							zip={info.zip}
							image={info.image}
							/>
					</div>
				);
			})}

			
			
		</div>
	);
};

export default IssuesList;
