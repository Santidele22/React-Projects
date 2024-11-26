import "../../styles/products.css";
import { AddToCartIcon } from "../icons";
export function Product({ products }) {
	const { title, description, price, thumbnail } = products;

	return (
		<article className="products">
			<img src={thumbnail} alt={title} />

			<div className="">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="product-price">
				<span>${price} </span>
				<AddToCartIcon />
			</div>
		</article>
	);
}
