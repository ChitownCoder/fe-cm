import React, { useState } from 'react';
import Newsfeed from './Newsfeed';
import Add from './issuesforms/Add';



const UserDash = () => {
	const[ toggle, setToggle] = useState(false)






 const open = () => {
	 setToggle(!false)
	 
 }
 


	return (
		<div>
			
				<button onClick={open}>Add a Issue</button>
				

				{
					toggle === !false?
			<div>
				<Add setToggle = {setToggle}/>
			</div>:null
}
   
		
	
			<Newsfeed />


		</div>
	);
};

export default UserDash;
