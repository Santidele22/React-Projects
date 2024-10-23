import { FollowsCards } from "./cards/follows-cards";
import "./follow-card-container.css";
function FollowCardContainer() {
	return (
		<article className="follow-container">
			<div className="title">
				<h3>Who to follow</h3>
			</div>
			<section className="people-to-follow">
				<FollowsCards />
			</section>
		</article>
	);
}

export default FollowCardContainer;
