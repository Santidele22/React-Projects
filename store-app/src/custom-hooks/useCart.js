import { useContext } from "react";
import { CartContext } from "../context/cart/cart.context";

export function useCart() {
	const cart = useContext(CartContext);
	if (!cart) {
		throw new Error("Error");
	}
	return cart;
}
