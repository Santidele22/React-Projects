import SquareBtn from "./btn";

import { useState } from "react";
import { PlayOption } from "../enum/playOptions";
import { XIsNext } from "../utils/roolsGame";

export default function Square() {
	const [value, setValue] = useState<PlayOption>(PlayOption.None);
	const [moves, setMoves] = useState<Array<number>>([]);
	console.log(value);
	function handleClick() {
		setMoves((prevMoves) => [
			...prevMoves,
			(prevMoves[prevMoves.length - 1] || 0) + 1,
		]);
		const xIsNext = XIsNext(moves.length);
		if (xIsNext) {
			setValue(PlayOption.X);
			return;
		}
		setValue(PlayOption.O);
	}

	return (
		<>
			<SquareBtn squareOnClick={handleClick} squareValue={value} />
		</>
	);
}
