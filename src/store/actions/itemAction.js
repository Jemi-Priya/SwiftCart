export const addItemToCart = (item) => {
	return {
		type: "ADD_ITEM",
		payload: item
	}
}

export const deleteItemFromCart = (item) => {
	return {
		type: "DELETE_ITEM",
		payload: item
	}
}

export const updateItem = (item) => {
	return {
		type: "UPDATE_ITEM",
		payload: item
	}
}