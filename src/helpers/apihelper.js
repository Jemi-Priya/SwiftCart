import axios from "axios";
const apiHelper = async (options) => {
	try {
		const apiResponse = await axios({
			url: options.url,
			headers: options.headers,
			timeout: 10000,
			method: options.httpRequest,
			data: options.body
		})
		console.log("response => ", apiResponse.data);
		return apiResponse.data
	}
	catch (error) {
		return {
			error: true,
			message: error.response?.data?.error?.message || error.message,
		}
	}
}
export default apiHelper;
