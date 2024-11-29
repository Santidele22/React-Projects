import { useCartReducer } from "../../custom-hooks/useCartReducer";
import { CartContext } from "./cart.context";

export function CartProvider({ children }) {
	const { state, addToCart, removeToCart, clearCart } = useCartReducer();

	return (
		<CartContext.Provider
			value={{
				cart: state,
				addToCart,
				removeToCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
