import { Product } from "./product";

export function Products({ products }) {
	return (
		<main>
			{products.length > 0 ? (
				products?.map((product) => (
					<ul key={product.id}>
						<Product products={product} key={product.id} />
					</ul>
				))
			) : (
				<h1>No Hay Productos</h1>
			)}
		</main>
	);
}
