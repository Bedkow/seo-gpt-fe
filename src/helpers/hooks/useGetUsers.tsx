import axios from "axios";
import { useEffect } from "react";

const useGetUsers = (id?: string) => {
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
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
};

export default useGetUsers;
