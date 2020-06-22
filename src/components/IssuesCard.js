import React, { useState } from 'react';
import Edit from './issuesforms/Edit';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useDispatch } from 'react-redux';
import {getIssues} from '../redux/Actions'



const IssuesCard = ({ name, desc, state, zip, image, vote, id }) => {
	//* STATE ARRAY BELOW *//
	const [editIssues, setEditIssues] = useState({}); //* empty object *//
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch()
// console.log(id)

  const open = () => {
    setToggle(!false);
  }

	const edit = () => {
		axiosWithAuth()
			.get(`/issues/${id}`)

			.then((res) => {
				console.log(res.data);
        setEditIssues(res.data);
        open()
        
			})

			.catch((err) => console.log('418 I am a TeaPot!!!'));
	};

	const removeIssue = () => {
    axiosWithAuth()
    .delete(`/issues/${id}`)
    .then((res) => {
      dispatch(getIssues())
    })
    .catch((err) => console.log('418 I am a TeaPot!!!'));
  };

	return (
		<div>
			<div>
				<img src={image} alt="community problem" />
			</div>
			<section>
				<h1>{name}</h1>
				<h4>{desc}</h4>
				<p>
					<li>{state}</li>
					<li>{zip}</li>
					{vote}
				</p>
			</section>

			<footer>
				<button onClick={edit}>Edit</button>
				<button onClick={removeIssue}>Delete</button>
			</footer>

{toggle === !false? 
 

			<section>
				<Edit editIssue={editIssues} />
      </section>:null
      }
		</div>
	);
};

export default IssuesCard;
