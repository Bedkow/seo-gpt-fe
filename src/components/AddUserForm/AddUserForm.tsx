const AddUserForm = () => {
	const submitUserForm = (e: any) => {
		e.preventDefault();
		alert("new user submitted");
		// update user state in redux
	};
	return (
		<>
			<label htmlFor='user-form' className='text-xl'>
				Add New User
			</label>
			<form onSubmit={submitUserForm} id='user-form'>
				First Name:{" "}
				<input
					type='text'
					required
					className='bg-bgmain text-tmain px-1 border'></input>
				Last Name:{" "}
				<input
					type='text'
					required
					className='bg-bgmain text-tmain px-1 border'></input>
				<label className='px-1' htmlFor='role'>
					Role:
				</label>
				<select
					className='bg-bgmain text-tmain px-1 border cursor-pointer'
					id='role'
					onChange={(e) => e.stopPropagation()}
					required>
					<option value='none'>None</option>
					<option value='copywriter'>Copywriter</option>
					<option value='administrator'>Administrator</option>
				</select>
				<label className='px-1' htmlFor='email'>
					Send Password To:
				</label>
				<input
					type='email'
					placeholder='e-mail'
					id='email'
					className='bg-bgmain text-tmain px-1 border'
					required></input>
				<input
					type='submit'
					value='Create User'
					className='px-1 ml-10 text-green-500 border border-green-500 cursor-pointer'></input>
			</form>
		</>
	);
};

export default AddUserForm;
