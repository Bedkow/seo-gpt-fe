import { useEffect, useState } from "react";

import mockAPI from "../../helpers/mockAPI";
import usersJSON from "../../data/users.json";
import UserCard from "../../components/UserCard/UserCard";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import { User } from "../../types/user";
import useGetUsers from "../../helpers/hooks/useGetUsers";

const AdminPage = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		mockAPI(usersJSON)
			.then((data: any) => {
				setUsers(data.users);
				// console.log(data.users);
			})
			.catch((err) => console.log(err));
	}, []);

	useGetUsers();

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
					return <UserCard user={user} key={user.id}></UserCard>;
				})}
			</div>
		</div>
	);
};

export default AdminPage;
