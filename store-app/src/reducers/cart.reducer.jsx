import { ACTIOS_PAYLOAD, updateLocalStorage } from "../consts/cart.consts";

const UPDATE_STATE_BY_ACTION = {
	[ACTIOS_PAYLOAD.ADD_TO_CART]: (state, action) => {
		//Si hay producto en el carrito
		const { id } = action.payload;

		const productInCartIndex = state.findIndex((product) => product.id === id);
		if (productInCartIndex >= 0) {
			const newState = [
				...state.slice(0, productInCartIndex),
				{
					...state[productInCartIndex],
					quantity: state[productInCartIndex].quantity + 1,
				},
				...state.slice(productInCartIndex + 1),
			];

			console.log("New state:", newState);
			updateLocalStorage(newState);
			return newState;
		}

		const newState = [
			...state,
			{
				...action.payload,
				quantity: 1,
			},
		];
		updateLocalStorage(newState);
		return newState;
	},

	[ACTIOS_PAYLOAD.REMOVE_FROM_CART]: (state, action) => {
		const { id } = action.payload;

		const newState = state.filter((product) => product.id !== id);
		updateLocalStorage(newState);
		return newState;
	},

	[ACTIOS_PAYLOAD.CLEAR_CART]: () => {
		updateLocalStorage([]);
		return [];
	},
};
export function CartReducer(state, actions) {
	const { type: actionType } = actions;
	const updateState = UPDATE_STATE_BY_ACTION[actionType];
	return updateState ? updateState(state, actions) : state;
}
