import React, { useState } from 'react';

const UpVote = (props) => {
	const [upvotes, setUpvotes] = useState(0);

	return <div className="issue-upvote">{upvotes} I am UpVotes Page</div>;
};

export default UpVote;
