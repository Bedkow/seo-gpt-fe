import { useEffect, useState } from "react";

import mockAPI from "../../helpers/mockAPI";
import usersJSON from "../../data/users.json";
import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../types/user";

const AdminPage = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		mockAPI(usersJSON).then((data: any) => {
			setUsers(data.users);
			console.log(data.users);
		});
	}, []);

	return (
		<div>
			<div>Admin Page</div>
			<hr></hr>
			<br></br>
			<div>
				{users.map((user: User) => {
					return <UserCard user={user} key={user.id}></UserCard>;
				})}
			</div>
		</div>
	);
};

export default AdminPage;
