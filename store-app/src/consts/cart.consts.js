export const CART_INITIAL_STATE =
	JSON.parse(window.localStorage.getItem("cart")) || [];

// update localStorage
export const updateLocalStorage = (state) => {
	window.localStorage.setItem("cart", JSON.stringify(state));
};

export const ACTIOS_PAYLOAD = {
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	CLEAR_CART: "CLEAR_CART",
};
