import { Turns } from "../enum/playOptions";
import SquareBtn from "./btn";
interface ModalProps {
	headerText: string;
	resetGame: () => void;
	player: Turns | string;
}
export function Modal({ headerText, resetGame, player }: ModalProps) {
	return (
		<div className="modal">
			<header className="header-modal">
				<h2>{headerText}</h2>

				<h3>{player}</h3>
			</header>

			<SquareBtn squareOnClick={resetGame} squareValue={"Reset Game"} />
		</div>
	);
}
