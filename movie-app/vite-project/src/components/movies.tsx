import { Search } from "../models/movies-model";
import { Movie } from "./movie";

interface MoviesProps {
	movies: Search[];
}

export function RenderMovies({ movies }: MoviesProps) {
	const hasMovie = movies?.length > 0;
	return (
		<div className="movies-container">
			{hasMovie
				? movies.map((movie) => (
						<Movie
							key={movie.imdbID}
							imdbID={movie.imdbID}
							Poster={movie.Poster}
							Title={movie.Title}
							Type={movie.Type}
							Year={movie.Year}
						/>
				  ))
				: "No se encontro la pelicula buscada"}
		</div>
	);
}
