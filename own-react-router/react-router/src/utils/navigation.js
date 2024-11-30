import { EVENTS } from "./consts";

export function navigation(path) {
	//Añade una nueva entrada al historial sin recargar la pagina
	window.history.pushState({}, "", path);
	//Creo un evento personalizado
	const navigationEvent = new Event(EVENTS.PUSHSTATE);
	window.dispatchEvent(navigationEvent);
}
