//Componente principal encagardo del enrutamiento de la app
import { match } from "path-to-regexp";
import { useLocationPath } from "../custom-hooks/useLocationPath";
import { Children } from "react";

export function Router({ children, routes = [] }) {
	const { path } = useLocationPath();

	const routesFromChildren = Children.map(children, ({ type, props }) => {
		const { name } = type;
		const isRoute = name === "Route";
		return isRoute ? props : null;
	});
	const routesToUse = routes.concat(routesFromChildren);

	let routeParams = {};
	const Page = routesToUse.find((route) => {
		if (path === route.path) return true;

		const matcherUrl = match(route.path, { decode: decodeURIComponent });
		const matched = matcherUrl(path);
		if (!matched) return false;

		routeParams = matched.params;

		return true;
	})?.component;
	return Page ? <Page routeParams={routeParams} /> : <h1>Page Not found</h1>;
}
