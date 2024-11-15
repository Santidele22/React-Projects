import { Turns } from "../enum/playOptions";
import SquareBtn from "./btn";
interface GameBoardProps {
	board: Turns[];
	updateBoard: (index: number) => void;
}
export function GameBoard({ board, updateBoard }: GameBoardProps) {
	return (
		<>
			<div className="board">
				{board.map((square, index) => (
					<SquareBtn
						squareOnClick={() => updateBoard(index)}
						squareValue={square}
						key={index}
					/>
				))}
			</div>
		</>
	);
}
