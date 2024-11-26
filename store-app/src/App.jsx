import { useState } from "react";
//components
import { Header } from "./components/header";
import { Products } from "./components/products/products";
//services && mocks
import { products as InitialProducts } from "./mocks/products.json";
import { filteredProducts } from "./services/products.services";
function App() {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});

	function filterProducts() {
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

	const products = filterProducts();

	return (
		<>
			<Header />
			<Products products={products} />
		</>
	);
}

export default App;
