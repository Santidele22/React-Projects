export function Header() {
	return (
		<header className="header">
			<h1 style={{ textAlign: "center" }}>AEgir Todo</h1>
			<div className="input-container">
				<input
					type="text"
					placeholder="study English, cook, read...
					"
					className="new-todo"
				/>
			</div>
		</header>
	);
}
