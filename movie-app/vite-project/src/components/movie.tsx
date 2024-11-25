import { Search } from "../models/movies-model";

export function Movie({ Poster, Title, Year, imdbID }: Search) {
	return (
		<article className="movie" key={imdbID}>
			<figure>
				<img src={Poster} alt={Title} />
			</figure>

			<h3>
				{Title}: {Year}
			</h3>
		</article>
	);
}
