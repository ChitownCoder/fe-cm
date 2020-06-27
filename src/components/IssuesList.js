import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyState } from '../redux/Actions';
import { Row, Col } from 'reactstrap';
import IssuesCard from './IssuesCard';

const IssuesList = () => {
	const id = localStorage.getItem('user_id');
	const newIssue = useSelector((state) => state.issues);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMyState(id));
		// eslint-disable-next-line
	}, [dispatch]);

	console.log(newIssue);
	return (
		<Row>
			{newIssue.map((info, index) => {
				return (
					<Col key={index} lg="4">
						<div>
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
