import { Link } from "../components/link";

export function Home() {
	return (
		<>
			<h1>Home</h1>
			<Link to={"/about"}>Ir al about</Link>
		</>
	);
}
