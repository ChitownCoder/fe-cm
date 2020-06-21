import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIssues } from '../redux/Actions';
import IssuesCard from './IssuesCard';

const IssuesList = () => {
	const newIssue = useSelector((state) => state.issues);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIssues());
	}, [dispatch]);
	// console.log(newIssue);
	return (
		<div>
			{newIssue.map((info) => {
				return (
					<IssuesCard
						key={info.id}
						name={info.name}
						desc={info.desc}
						state={info.state}
						zip={info.zip}
						image={info.image}
						vote={info.vote}
					/>
				);
			})}
		</div>
	);
};

export default IssuesList;
