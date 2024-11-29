import "../../styles/products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "../icons";
import { useCart } from "../../custom-hooks/useCart";
export function Product({ products }) {
	const { title, description, price, thumbnail } = products;

	const { cart, addToCart, removeToCart } = useCart();

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	const btnClassName = checkProductInCart(products) ? "isProductInCart" : "";

	const isProductInCart = checkProductInCart(products) ? true : false;

	return (
		<article className="products">
			<img src={thumbnail} alt={title} loading="lazy" />
			<div className="">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="product-price">
				<span>${price} </span>
				<button
					className={btnClassName}
					onClick={() => {
						isProductInCart ? removeToCart(products) : addToCart(products);
					}}
				>
					{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
				</button>
			</div>
		</article>
	);
}
