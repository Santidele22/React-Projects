import { FILTERS_BTN } from "../consts/consts";
import { FILTERS_VALUE } from "../types/types";

interface FIltersProps {
	filterSelected: FILTERS_VALUE;
	onFilterChanged: (value: FILTERS_VALUE) => void;
}
export function Filters({ filterSelected, onFilterChanged }: FIltersProps) {
	const handleClick =
		(filter: FILTERS_VALUE) => (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			onFilterChanged(filter);
		};
	return (
		<ul className="filters">
			{Object.entries(FILTERS_BTN).map(([key, { href, title }]) => {
				const isSelected = key === filterSelected;
				const className = isSelected ? "selected" : "";

				return (
					<li key={key}>
						<a
							href={href}
							className={className}
							onClick={handleClick(key as FILTERS_VALUE)}
						>
							{title}
						</a>
					</li>
				);
			})}
		</ul>
	);
}
