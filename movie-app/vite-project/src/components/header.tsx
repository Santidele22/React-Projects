import { useCallback, useState } from "react";
import { Form } from "./form";
import { useFormValid } from "../custom-hooks/useFormValidation";

import { FormEvent } from "../models/types";
import { useMovies } from "../custom-hooks/useMovies";
import debounce from "just-debounce-it";

interface HeaderProps {
	setMovies: any;
}

export function Header({ setMovies }: HeaderProps) {
	const [sort, setSort] = useState(false);
	//Custom hooks
	const { query, setQuery, error } = useFormValid();
	const { responseMovie, getMovies } = useMovies(query, sort);

	const debouncedGetMovies = useCallback(
		debounce((search: string) => {
			getMovies(search);
		}, 500),
		[getMovies]
	);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		getMovies(query);
		setMovies(responseMovie);
	}

	function handleChange(e: any) {
		const newQuery: string = e.target.value;
		if (newQuery.startsWith(" ")) return;
		setQuery(newQuery);
		debouncedGetMovies(newQuery);
		setMovies(responseMovie);
	}

	function handleSort() {
		setSort(!sort);
	}
	return (
		<header>
			<h1>Buscador de Peliculas</h1>
			<Form
				type="text"
				placeHolder="Avengers,Starwars..."
				handleChange={(e) => handleChange(e)}
				handleSubmit={(e) => handleSubmit(e)}
				text="Search"
				inputName="query"
				value={query}
			/>
			<label htmlFor="sort">Sort by title</label>
			<input type="checkbox" onChange={handleSort} checked={sort} name="sort" />

			{
				<p style={{ color: "red" }}>
					{Object.values(error).map((e) =>
						e.length > 0 ? <li key={e}>{e}</li> : ""
					)}
				</p>
			}
		</header>
	);
}
