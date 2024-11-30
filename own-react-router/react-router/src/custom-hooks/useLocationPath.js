import { useState, useEffect } from "react";
import { EVENTS } from "../utils/consts";

export function useLocationPath() {
	const [path, setPath] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChanges = () => {
			setPath(window.location.pathname);
		};
		window.addEventListener(EVENTS.PUSHSTATE, onLocationChanges);
		window.addEventListener(EVENTS.POPSTATE, onLocationChanges);
		return () => {
			window.removeEventListener(EVENTS.PUSHSTATE, onLocationChanges);
			window.removeEventListener(EVENTS.POPSTATE, onLocationChanges);
		};
	}, []);

	return {
		path,
	};
}
