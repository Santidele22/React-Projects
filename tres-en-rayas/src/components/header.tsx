interface HeaderProps {
	resetGame: () => void;
}
export function Header({ resetGame }: HeaderProps) {
	return (
		<>
			<h1>TA-TE-TI</h1>
			<div className="reset">
				<button onClick={resetGame}>Reset game</button>
			</div>
		</>
	);
}
