import { BTN } from "../utils/consts";
import { navigation } from "../utils/navigation";

export function Link({ to, target, ...props }) {
	const handleClick = (event) => {
		//Si apreta el boton izquierdo
		const isMainEvent = event.button === BTN.primary; // primary click
		const isModifiedEvent =
			event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
		const isManageableEvent = target === undefined || target === "_self";

		if (!isMainEvent || !isModifiedEvent || !isManageableEvent) {
			event.preventDefault();
			navigation(to);
		}
	};
	return <a onClick={handleClick} href={to} target={target} {...props} />;
}
