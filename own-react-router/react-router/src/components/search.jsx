import { Link } from "./link";

export function Search({ routeParams }) {
	return (
		<>
			<h1>Haz buscado {routeParams.query}</h1>
			<Link to={"/"}>Ir al home</Link>
		</>
	);
}
