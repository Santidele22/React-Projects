export function filteredProducts(products, minPrice, category) {
	return products.filter((product) => {
		return (
			product.price >= minPrice &&
			(category === "all" || product.category === category)
		);
	});
}
