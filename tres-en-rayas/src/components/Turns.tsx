interface TurnsComponentProps {
	children: string;
	className: string;
}
export function TurnsComponent({ children, className }: TurnsComponentProps) {
	return (
		<div className="turns-container">
			<span className={className}>{children}</span>
		</div>
	);
}
