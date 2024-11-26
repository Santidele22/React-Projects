import { Product } from "./product";

export function Products({ products }) {
	return (
		<main>
			{products?.map((product) => (
				<ul>
					<Product products={product} key={product.id} />
				</ul>
			))}
		</main>
	);
}
