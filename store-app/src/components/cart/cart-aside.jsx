export function CartAside({ name, thumbnail, quantity, price, addToCart }) {
	return (
		<li className="">
			<img src={thumbnail} alt={name} />
			<div className="">
				<strong>
					{name}: {price}
				</strong>
			</div>
			<div className="cart-qty">
				<small>Cantidad: {quantity}</small>
				<div className="btn">
					<button onClick={addToCart}>+</button>
				</div>
			</div>
		</li>
	);
}
