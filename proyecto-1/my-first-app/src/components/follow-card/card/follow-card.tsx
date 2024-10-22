import "./follow-card.css";
//Components
import { Avatar } from "../../avatar/avatar";
import { Button } from "../../button/button";
//Interface
import { User } from "../../../models/user.models";


export function FollowCard(user: User, handleClickClick) {
	return (
		<article className="follow-card">
			<Avatar key={user.id.value} img={user.picture} alt={user.name.title} imgSize={user.picture} />
			<div className="follow-card-info">
				<div className="info">
					<span className="username">{user.name.first}</span>
					<span>@{user.login.username}</span>
				</div>
				<Button key={1} handleClick={handleClickClick} text="Follow" />
			</div>
		</article>
	);
}
