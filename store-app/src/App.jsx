//components
import { Header } from "./components/header";
import { Products } from "./components/products/products";
//services && mocks
import { products as InitialProducts } from "./mocks/products.json";
import { useFilters } from "./custom-hooks/useFilters";

function App() {
	const { filterProducts } = useFilters();

	const products = filterProducts(InitialProducts);

	return (
		<>
			<Header />
			<Products products={products} />
		</>
	);
}

export default App;
