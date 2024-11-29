//components
import { Header } from "./components/header";
import { Products } from "./components/products/products";
//services && mocks
import { products as InitialProducts } from "./mocks/products.json";
import { useFilters } from "./custom-hooks/useFilters";
import { Cart } from "./components/cart/cart";
import { CartProvider } from "./context/cart/cart.provider";
function App() {
	const { filterProducts } = useFilters();

	const products = filterProducts(InitialProducts);

	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={products} />
		</CartProvider>
	);
}

export default App;
