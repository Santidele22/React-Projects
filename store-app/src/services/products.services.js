export function filteredProducts(products, minPrice, category) {
	return products.filter((product) => {
		return (
			product.price >= minPrice &&
			(category === "all" || product.category === category)
		);
	});
}
export function allCategoriesFromProducts({ products }) {
	const categories = products?.map((product) => product.category);
	const setCategories = new Set(categories);
	const uniquesCategories = [...setCategories];
	return uniquesCategories;
}
