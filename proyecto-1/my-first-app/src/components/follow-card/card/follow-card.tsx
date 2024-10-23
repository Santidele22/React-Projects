import "./follow-card.css";
//Components
import { Avatar } from "../../avatar/avatar";
import { Button } from "../../button/button";
//Interface
import { User } from "../../../models/user.models";
interface FollowCardProps {
	user:User
	handleClick: () => void
	btnText: string
}

export function FollowCard({user, handleClick, btnText}: FollowCardProps) {
	return (
		<article className="follow-card">
			<Avatar key={user.id.value} img={user.picture.thumbnail} alt={user.name.title} />
			<div className="follow-card-info">
				<div className="info">
					<span className="username">{user.name.first}</span>
					<span>@{user.login.username}</span>
				</div>
				<Button key={1} handleClick={handleClick} text={btnText} />
			</div>
		</article>
	);
}
