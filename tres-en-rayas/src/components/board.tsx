import { useState } from "react";
import SquareBtn from "./btn";
import { Turns } from "../enum/playOptions";
import { checkerWin } from "../utils/roolsGame";

export default function Board() {
	const [board, setBoard] = useState<Turns[]>(Array(9).fill(null));
	const [moves, setMoves] = useState<Turns>(Turns.X);
	const [winner, setWinner] = useState<boolean>(false);

	const xisSelected = moves === Turns.X ? "XisSelected" : "";
	const oisSelected = moves === Turns.O ? "OisSelected" : "";

	function resetGame() {
		setBoard(Array(9).fill(null));
		setWinner(false);
		setMoves(Turns.X);
	}
	function updateBoard(index: number) {
		if (board[index] !== null || winner) {
			return;
		}

		const newBoard = [...board];

		setMoves((prevMoves) => (prevMoves === Turns.X ? Turns.O : Turns.X));

		if (moves === Turns.X) {
			newBoard[index] = Turns.X;
			setBoard(newBoard);
		} else {
			newBoard[index] = Turns.O;
			setBoard(newBoard);
		}

		const isWinner = checkerWin(newBoard);
		if (isWinner) {
			setWinner(true);
			alert("Felicitaciones ha ganado el jugador " + moves);
		}
	}

	return (
		<>
			<h1>TA-TE-TI</h1>
			<div className="reset">
				<button onClick={resetGame}>Reset game</button>
			</div>
			<div className="board">
				{board.map((_, index) => (
					<SquareBtn
						squareOnClick={() => updateBoard(index)}
						squareValue={board[index]}
						key={index}
					/>
				))}
			</div>
			<div className="turns ">
				<span className={xisSelected}>{Turns.X}</span>
				<span className={oisSelected}>{Turns.O}</span>
			</div>
		</>
	);
}
