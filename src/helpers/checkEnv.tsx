const checkEnv = (): string => {
	if (process.env.REACT_APP_ENV_TYPE === "dev") {
		return process.env.REACT_APP_API_URL_DEV!;
	} else {
		return process.env.REACT_APP_API_URL_PROD!;
	}
};

export default checkEnv;
