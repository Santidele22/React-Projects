import { useContext } from "react";
import { filteredProducts } from "../services/products.services";
import { FilterContext } from "../context/filters/filters.context";

export function useFilters() {
	const { filters, setFilters } = useContext(FilterContext);

	function filterProducts(InitialProducts) {
		const products = filteredProducts(
			InitialProducts,
			filters.minPrice,
			filters.category
		);
		if (!products) {
			throw new Error("No se encuentran peliculas");
		}
		return products;
	}
	return { filters, filterProducts, setFilters };
}
