import axios from "axios";
import { useEffect, useState } from "react";

const useGetUsers = () => {
	const [usersData, setUsersData] = useState([]);

	let apiURL: any;
	if (process.env.REACT_APP_ENV_TYPE === "dev") {
		apiURL = process.env.REACT_APP_API_URL_DEV;
	} else {
		apiURL = process.env.REACT_APP_API_URL_PROD;
	}

	useEffect(() => {
		axios
			.get(apiURL + "users")
			.then((response) => {
				setUsersData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return usersData;
};

export default useGetUsers;
