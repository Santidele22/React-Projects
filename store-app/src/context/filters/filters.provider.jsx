import { useState } from "react";
import { FilterContext } from "./filters.context";

export function FilterProvider({ children }) {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});
	return (
		<FilterContext.Provider value={{ filters, setFilters }}>
			{children}
		</FilterContext.Provider>
	);
}
