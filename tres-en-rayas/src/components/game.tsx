import { useState } from "react";
import confetti from "canvas-confetti";
import { Turns } from "../enum/playOptions";
import { checkerWin, isDraw } from "../utils/roolsGame";
//Components
import { GameBoard } from "./board";
import { Header } from "./header";
import { TurnsComponent } from "./Turns";
import { Modal } from "./modal";

export default function Game() {
	const [board, setBoard] = useState<Turns[]>(() => {
		const boardFromStorage = window.localStorage.getItem("board");

		return boardFromStorage
			? JSON.parse(boardFromStorage)
			: Array(9).fill(null);
	});
	const [moves, setMoves] = useState<Turns | string>(() => {
		const movesFromStorage = window.localStorage.getItem("turn");
		return movesFromStorage ?? Turns.X;
	});
	const [winner, setWinner] = useState<boolean | null>(null);

	const xisSelected = moves === Turns.X ? "XisSelected" : "";
	const oisSelected = moves === Turns.O ? "OisSelected" : "";

	function resetGame() {
		setBoard(Array(9).fill(null));
		setWinner(null);
		setMoves(Turns.X);
	}

	function updateBoard(index: number) {
		const newBoard = [...board];
		if (board[index] !== null || winner) {
			return;
		}

		if (moves === Turns.X) {
			newBoard[index] = Turns.X;
		} else {
			newBoard[index] = Turns.O;
		}
		setBoard(newBoard);

		//Seteo datos en localStorage
		window.localStorage.setItem("board", JSON.stringify(newBoard));
		window.localStorage.setItem("turn", moves);
		const isWinner = checkerWin(newBoard);
		if (isWinner) {
			confetti();
			setWinner(true);
			return;
		} else if (isDraw(newBoard)) {
			setWinner(false);
			return;
		}
		setMoves((prevMoves) => (prevMoves === Turns.X ? Turns.O : Turns.X));
	}
	return (
		<>
			<Header resetGame={resetGame} />
			<GameBoard board={board} updateBoard={updateBoard} />
			<div className="turns">
				<TurnsComponent children={Turns.X} className={xisSelected} />
				<TurnsComponent children={Turns.O} className={oisSelected} />
			</div>
			{winner !== null && (
				<Modal
					resetGame={resetGame}
					headerText={winner ? "Win" : "empate"}
					player={moves}
				/>
			)}
		</>
	);
}
