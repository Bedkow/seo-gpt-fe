import { User } from "../../types/user";

const UserCard = ({ user }: { user: User }) => {
	console.log(user.role);
	return (
		<div className='grid grid-rows-3 p-2 m-5 border-2 b rounded-r-lg w-fit'>
			<div className='p-1 flex flex-row flex-wrap'>
				<span className='px-1'>Name: {user.name}</span>
				<span className='px-1'>Role: {user.role}</span>
			</div>
			<div className='p-1 flex flex-row flex-wrap'>
				<span className='px-1'>Queries Today: {user.queriesToday}</span>
				<span className='px-1'>Queries Total: {user.queriesTotal}</span>
			</div>
			<div className='p-1 flex justify-between'>
				<div>
					<label className='px-1' htmlFor='role'>
						Change role:
					</label>
					<select
						className='bg-bgmain text-tmain px-1 border cursor-pointer'
						id='role'
						defaultValue={user.role}
						onChange={() => alert("user role changed")}>
						<option value='none'>None</option>
						<option value='copywriter'>Copywriter</option>
						<option value='administrator'>Administrator</option>
					</select>
				</div>

				<button
					className='px-1 ml-10 text-red-500 border border-red-500'
					onClick={() => alert("user deleted")}>
					Delete User
				</button>
			</div>
		</div>
	);
};

export default UserCard;
