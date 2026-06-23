const initialState = {
	searchKeyword: ""
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEARCH_KEYWORD":
			return {
				...state, searchKeyword: action.payload
			}
		default:
			return state;
	}
}

export default searchReducer;

