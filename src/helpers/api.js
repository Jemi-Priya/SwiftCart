import apiHelper from './apihelper'
export const getAllProductsApi = async () => {
	const options = {
		url: "http://localhost:1337/api/products?populate=*",
		httpRequest: 'GET',
		headers: {}
	}
	const allProducts = await apiHelper(options);
	console.log("allProducts", allProducts)
	return allProducts;
}

export const validateUserApi = async (email, password) => {
	const options = {
		url: "http://localhost:1337/api/auth/local",
		headers: {
			"Content-Type": "application/json"
		},
		httpRequest: 'POST',
		body: JSON.stringify({
			identifier: email,
			password: password
		})
	}
	const response = await apiHelper(options);
	console.log("response validateUserApi => ", response);
	return response;
}

export const createUser = async (user) => {
	const options = {
		url: "http://localhost:1337/api/auth/local/register",
		headers: {
			"Content-Type": "application/json"
		},
		httpRequest: "POST",
		body: JSON.stringify({
			username: user.name,
			email: user.email,
			password: user.password
		})
	}
	return await apiHelper(options);
}