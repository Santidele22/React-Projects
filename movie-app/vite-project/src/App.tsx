import "./main.css";
import { RenderMovies } from "./components/movies";

import { Header } from "./components/header";
import { Search } from "./models/movies-model";
import { useState } from "react";
function App() {
	const [movies, setMovies] = useState<Search[]>([]);

	return (
		<div className="page">
			<Header setMovies={setMovies} />
			<main>
				<RenderMovies movies={movies} />
			</main>
		</div>
	);
}

export default App;
