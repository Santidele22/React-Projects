import { useEffect, useRef, useState } from "react";
import { Errors, validateMovieSearch } from "../validations/form-validation";

export function useFormValid(query:string){
	const [error, setError] = useState<Errors>({
		empty:'',
		maxLength:'',
		noLetters:'',
		onlySpaces:'',
		specialCharacters:'',
		sqlInjection:''
	});
	const isFirstInput = useRef(true)

	useEffect(() => {
		if(isFirstInput.current){
			isFirstInput.current = query === ''
			return
		}
		const validation = validateMovieSearch(query);
		if (validation) {
			setError(validation);
			return
		}
		return

	}, [query]);

	return error
}