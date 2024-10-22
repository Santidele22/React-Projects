import { Avatar } from "../../avatar/avatar";
import { imgSizes } from "../../avatar/img.enum";
import { Button } from "../../button/button";
import "./follow-card.css";
export function FollowCard() {
	function example() {}
	return (
		<article className="follow-card">
			<Avatar key={1} img="a" alt="a" imgSize={imgSizes.MEDIUM} />
			<div className="follow-card-info">
				<div className="info">
					<span className="username">Nombre</span>
					<span>@username</span>
				</div>
				<Button key={1} handleClick={example} text="Follow" />
			</div>
            
		</article>
	);
}
