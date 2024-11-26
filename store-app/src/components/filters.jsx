import { useId } from "react";

export function Filters() {
	const filterProductsId = useId();
	const filterCategoriesId = useId();
	return (
		<section className="filters">
			<div className="filter-range">
				<label htmlFor={filterProductsId}>Precio a partir de:</label>
				<input type="range" name="range" id={filterProductsId} />
				<span>Redenrizar valor </span>
			</div>
			<div className="filter-categorie">
				<select id={filterCategoriesId}>
					{/*Renderizar todas las categorias de la api */}
					<option value="all">Todas</option>
					<option value="laptops">Portátiles</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	);
}
