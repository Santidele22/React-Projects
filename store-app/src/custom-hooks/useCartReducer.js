import { useReducer } from "react";
import { CartReducer } from "../reducers/cart.reducer";
import { ACTIOS_PAYLOAD, CART_INITIAL_STATE } from "../consts/cart.consts";

export function useCartReducer() {
	const [state, dispatch] = useReducer(CartReducer, CART_INITIAL_STATE);

	const addToCart = (product) =>
		dispatch({
			type: ACTIOS_PAYLOAD.ADD_TO_CART,
			payload: product,
		});
	const removeToCart = (product) =>
		dispatch({
			type: ACTIOS_PAYLOAD.REMOVE_FROM_CART,
			payload: product,
		});
	const clearCart = () => dispatch({ type: ACTIOS_PAYLOAD.CLEAR_CART });

	return { state, addToCart, removeToCart, clearCart };
}
