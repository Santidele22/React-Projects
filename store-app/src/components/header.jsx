import { Filters } from "./filters";
import { CartIcon } from "./icons";

export function Header() {
	return (
		<header className="header">
			<div className="header-title">
				<h1>React shop</h1>
				<CartIcon />
			</div>
			<div className="filters">
				<Filters />
			</div>
		</header>
	);
}
