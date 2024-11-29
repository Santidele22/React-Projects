export function filteredProducts(products, minPrice, category) {
	return products.filter((product) => {
		return (
			product.price >= minPrice &&
			(category === "all" || product.category === category)
		);
	});
}
export function allCategoriesFromProducts({ products }) {
	if (!Array.isArray(products)) {
		throw new Error("El listado de productos tiene que ser un array");
	}

	const categories = products?.map((product) => product.category);

	if (!categories) {
		throw new Error("No se encuentras categorias");
	}
	const setCategories = new Set(categories);
	const uniquesCategories = [...setCategories];
	return uniquesCategories;
}
