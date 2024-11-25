import { FormEvent } from "../models/types";

interface FormProps {
	type: string;
	placeHolder: string;
	handleSubmit?: (e: FormEvent) => void;
	handleChange?: (e) => void;
	text: string;
	inputRef?: any;
	inputName?: string;
	value: any;
}

export function Form({
	type,
	placeHolder,
	handleSubmit,
	handleChange,
	text,
	inputRef,
	inputName,
	value,
}: FormProps) {
	return (
		<form action="submit" onSubmit={handleSubmit} className="form">
			<input
				ref={inputRef}
				name={inputName}
				type={type}
				placeholder={placeHolder}
				onChange={handleChange}
				value={value}
			/>
			<button type="submit">{text}</button>
		</form>
	);
}
