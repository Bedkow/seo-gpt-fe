import { User } from "../../types/user";

const UserCard = ({ user }: { user: User }) => {
	return (
		<div className="grid-rows-2 grid-cols-2">
			<span>Name: {user.name}</span>
			<span>Role: {user.role}</span>
			<span>Queries Today: {user.queriesToday}</span>
			<span>Queries Total: {user.queriesTotal}</span>
			<hr />
		</div>
	);
};

export default UserCard;
