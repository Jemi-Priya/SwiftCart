const initialState = {
	cartItems: [],
};

const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			const ifItemExists = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);
			if (ifItemExists) {
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item,
					),
				};
			} else {
				return {
					...state,
					cartItems: [
						...state.cartItems,
						{
							...action.payload,
							quantity: 1,
						},
					],
				};
			}
		}
		case "DELETE_ITEM": {
			const ifItemExists = state.cartItems.find(item => (item.id === action.payload.id)
				&& item.quantity > 1)
			{
				if (ifItemExists) {
					return {
						...state,
						cartItems: state.cartItems.map(item => item.id === action.payload.id ?
							{
								...item,
								quantity: item.quantity - 1,
							} : item)
					}
				}
				else {
					return {
						...state,
						cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
					}
				}
			}
		}
		case "UPDATE_ITEM": {
			return {
				...state,
				cartItems: state.cartItems.map(item => (item.id === action.payload.id ? action.payload : item))
			}
		}
		default:
			return state;
	}
};

export default itemReducer;
