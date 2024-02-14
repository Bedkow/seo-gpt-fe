import { useEffect, useState } from "react";

import UserCard from "../../components/UserCard/UserCard";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import { User } from "../../types/user";
import useGetUsers from "../../helpers/hooks/useGetUsers";

const AdminPage = () => {
	// const [users, setUsers] = useState([]);

	let users = useGetUsers();

	return (
		<div>
			<div>Admin Page</div>
			<hr></hr>
			<br></br>
			<AddUserForm></AddUserForm>
			<br></br>
			<hr></hr>
			<br></br>
			<label htmlFor='users-container' className='text-xl'>
				Active Users
			</label>
			<div id='users-container'>
				{users.map((user: User) => {
					console.log(user);
					return <UserCard user={user} key={user._id}></UserCard>;
				})}
			</div>
		</div>
	);
};

export default AdminPage;
