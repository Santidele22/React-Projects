import { useState } from "react";
import { TaskName } from "../models/task.model";

interface HeaderProps {
	saveTask: ({ Name }: TaskName) => void;
}
export function Header({ saveTask }: HeaderProps) {
	const [input, setInput] = useState("");
	function handleSubmit(event) {
		event?.preventDefault();
		saveTask({ Name: input });
		setInput("");
	}
	return (
		<header className="header">
			<h1 style={{ textAlign: "center" }}>AEgir Todo</h1>
			<div className="input-container">
				<form onSubmit={handleSubmit}>
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="study English, cook, read...
					"
						className="new-todo"
					/>
				</form>
			</div>
		</header>
	);
}
