import { useId } from "react";
import { useFilters } from "../custom-hooks/useFilters";
import products from "../mocks/products.json";
import { allCategoriesFromProducts } from "../services/products.services";
export function Filters() {
	const { filters, setFilters } = useFilters();

	const filterProductsId = useId();
	const filterCategoriesId = useId();

	function handleChangeRange(e) {
		setFilters((prevState) => ({
			...prevState,
			minPrice: e.target.value,
		}));
	}
	function handleChangeSelect(e) {
		setFilters((prevState) => ({
			...prevState,
			category: e.target.value,
		}));
	}

	const categories = allCategoriesFromProducts(products);

	return (
		<section className="filters">
			<div className="filter-range">
				<label htmlFor={filterProductsId}>Precio a partir de:</label>
				<input
					type="range"
					name="range"
					min="0"
					max="1000"
					id={filterProductsId}
					value={filters.minPrice}
					onChange={handleChangeRange}
				/>
				<span>${filters.minPrice} </span>
			</div>
			<div className="filter-categorie">
				<select id={filterCategoriesId} onChange={handleChangeSelect}>
					{/*Renderizar todas las categorias de la api */}
					<option value="all">Todas</option>
					{categories?.map((categorie) => (
						<option value={categorie} key={categorie}>
							{categorie}
						</option>
					))}
				</select>
			</div>
		</section>
	);
}
