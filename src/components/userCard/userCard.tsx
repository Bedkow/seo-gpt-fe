import { User } from "../../types/user";

const UserCard = ({ user }: { user: User }) => {
	return (
		<div>
			<div>Name: {user.name}</div>
			<div>Role: {user.role}</div>
			<div>Queries Today: {user.queriesToday}</div>
			<div>Queries Total: {user.queriesTotal}</div>
			<hr />
		</div>
	);
};

export default UserCard;
