import { useState } from "react";
import { Form } from "./form";
import { useFormValid } from "../custom-hooks/useFormValidation";

import { FormEvent } from "../models/types";
import { useMovies } from "../custom-hooks/useMovies";

interface HeaderProps {
	setMovies: any;
}

export function Header({ setMovies }: HeaderProps) {
	const [query, setQuery] = useState("");
	//Custom hooks
	const error = useFormValid(query);
	const { responseMovie, getMovies } = useMovies(query);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		getMovies();
		setMovies(responseMovie);
	}

	function handleChange(e: any) {
		const newQuery: string = e.target.value;
		if (newQuery.startsWith(" ")) return;
		setQuery(e.target.value);
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
