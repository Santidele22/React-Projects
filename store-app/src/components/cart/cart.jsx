import { useId } from "react";
import "../../styles/cart.css";
import { CartIcon, ClearCartIcon } from "../icons";
import { CartAside } from "./cart-aside";
import { useCart } from "../../custom-hooks/useCart";

export function Cart() {
	const cartCheckboxId = useId();
	const { cart, addToCart, clearCart } = useCart();

	return (
		<>
			<label htmlFor={cartCheckboxId} className="cart-icon">
				<CartIcon />
			</label>
			<input className="cart-icon-check" type="checkbox" id={cartCheckboxId} />
			<aside className="cart">
				<ul>
					{cart.map((item) => (
						<CartAside
							key={item.id}
							addToCart={() => addToCart(item)}
							{...item}
						/>
					))}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
}
