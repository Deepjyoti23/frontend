import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';

const EventHandling = () => {
	
	const [upvotes, setUpvotes] = useState(0);
	const [mycolor, setMycolor] = useState('#eee');

	let likes = 0; 

	const increaseLikes = () => {
		likes++;
		console.log(likes)
	}
	const increaseupvotes = () => {
		//upvotes++ ❌ wrong
		setUpvotes(upvotes+1); //✅ right
	}

	const notify = () => toast('Here is your toast.');

	return (
	<div style={{backgroundColor: mycolor, height:'100vh', padding:50}}>
		<h1>Event Handling </h1>
		<hr />
		<button className='btn btn-primary' onClick={() => alert('Knock Knock!!👌👌')}>Click Event Handling</button>
		<br />
		<br />
		{/* <input type="text" onChange={(e) => {console.log(e.target.value)}} /> */}
		<br />
		<br />
		<input type="color" onChange={(e) => {setMycolor(e.target.value)}} />
		<br />
		<button className='btn btn-danger mt-4' onClick={increaseLikes}>Add a like</button>

		<h1> 👍{likes}</h1>

		<button className='btn btn-danger mt-4' onClick={increaseupvotes}>Add a upvote</button>

		<h1>🔼{upvotes}</h1>

		<input type="range" className='form-range' id='customRange1' onChange={(e) => {console.log(e.target.value);}} />

		<button onClick={notify}>Make me a toast</button>
      <Toaster />

	</div>
	)
}

export default EventHandling