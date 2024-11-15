import { Turns } from "../enum/playOptions";

interface SquareBtnProps {
	squareOnClick: () => void;
	squareValue: Turns | string;
}
export default function SquareBtn({
	squareOnClick,
	squareValue,
}: SquareBtnProps) {
	return <button onClick={squareOnClick}>{squareValue}</button>;
}
