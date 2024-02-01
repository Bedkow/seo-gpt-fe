export default async function mockAPI(jsonData: any) {
	return new Promise(function (resolve, reject) {
		try {
			resolve(jsonData);
		} catch (e: any) {
			reject(new Error(e.message));
		}
	});
}
