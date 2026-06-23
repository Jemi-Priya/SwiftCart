const initialState = {
	user: {
		id: "",
		email: "",
		username: ""
	}
};

export const userReducer = (state = initialState, action) => {
	const initialState = {
		user: {
			id: "",
			email: "",
			username: ""
		}
	};
	switch (action.type) {
		case "SET_USER": {
			return { ...state, user: { ...action.payload } };
		}
		default:
			return {
				...state
			}
	}
}