//rafce
import React, { useEffect, useState } from 'react'

export const UserManager = () => {

	const [userList, setuserList] = useState([])
	const fetchUserData = async() => {
		const res = await fetch('http://localhost:5000/user/getall');
		const data = await res.json();
		console.log(data);
		setuserList(data);
	};

	useEffect(() => {
		fetchUserData();
	}, []);
	
  return (
	<div>
		<div className='container'>
			<h1>Manage User Data</h1>
			<hr />
			<table className='table table-striped table-dark'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Password</th>
						<th colSpan={2} className='text-center'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						userList.map((user) => (
							<tr>
								<td>{user._id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.password}</td>
								<td>
									<button className='btn btn-danger'>
										<i class="fas fa-trash    "></i></button>
								</td>
								<td>
									<button className='btn btn-primary'>
										<i class="fas fa-pen    "></i>
										</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	</div>
  )
}
