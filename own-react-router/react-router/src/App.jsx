import { Router } from "./components/router";
import { Search } from "./components/search";
import { Route } from "./components/route";
import { lazy } from "react";
//LazyLoading
const lazyHomeComponent = lazy(() => import("./pages/home"));
const lazyAboutComponent = lazy(() => import("./pages/about"));
const appRoutes = [
	{
		path: "/search/:query",
		component: Search,
	},
];

function App() {
	return (
		<>
			<Router routes={appRoutes}>
				<Route path="/" component={lazyHomeComponent} />
				<Route path="/about" component={lazyAboutComponent} />
			</Router>
		</>
	);
}

export default App;
