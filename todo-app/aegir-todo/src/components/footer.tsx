import { Filters } from "./filters";

export function Footer() {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>0</strong>
				Tareas pendientes
			</span>
			<Filters />
		</footer>
	);
}
