import { useEffect, useState } from "react";
interface PositionInterface {
	clientX: number;
	clientY: number;
}
function App() {
	const [enable, setEnable] = useState<boolean>(false);
	const [position, setPosition] = useState<PositionInterface>({
		clientX: 0,
		clientY: 0,
	});
	useEffect(() => {
		function handleMove(event: any) {
			const { clientX, clientY } = event;
			setPosition({ clientX, clientY });
		}
		if (enable) {
			window.addEventListener("pointermove", handleMove);
		}

		return () => {
			window.removeEventListener("pointermove", handleMove);
		};
	}, [enable]);

	const enabledPointerFollower = () => setEnable(!enable);
	const enabledClass = enable ? "enabled" : "disabled";
	return (
		<main>
			<div
				className={enabledClass}
				style={{
					backgroundColor: "#0f6",
					borderRadius: "50%",
					width: 40,
					height: 40,
					position: "absolute",
					top: -20,
					left: -20,
					transform: `translate(${position.clientX}px,  ${position.clientY}px)`,
					pointerEvents: "none",
				}}
			></div>
			<button onClick={enabledPointerFollower}>
				{enable ? "Desactivar" : "Activar"} Mouse events
			</button>
		</main>
	);
}

export default App;
