import { FILTERS_VALUE } from "../types/types";
import { Filters } from "./filters";
interface FooterProps {
	activeCount: number;
	handleFilterChange: (value: FILTERS_VALUE) => void;
	filterSelected: FILTERS_VALUE;
	onClearCompleted: () => void;
	completedCount: number;
}
export function Footer({
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted,
}: FooterProps) {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong>
				Tareas pendientes
			</span>

			<Filters
				filterSelected={filterSelected}
				onFilterChanged={handleFilterChange}
			/>
			{completedCount > 0 && (
				<button className="clear-completed" onClick={onClearCompleted}>
					Borrar completados
				</button>
			)}
		</footer>
	);
}
