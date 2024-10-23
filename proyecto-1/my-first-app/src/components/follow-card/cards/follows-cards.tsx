import { useEffect, useState } from "react";
import { User } from "../../../models/user.models";
import { userData } from "../../../services/user.services";
import { FollowCard } from "../card/follow-card";
export function FollowsCards() {
	const [users, setUsers] = useState<User[]>([]);

	const handleClick = (userId: string) => {
		setUsers((prevUsers) =>
		  prevUsers.map((user) =>
			user.id.value === userId
			  ? { ...user, isFollowing: !user.isFollowing }
			  : user
		  )
		);
	  };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data:User[] = await userData();
				const updatedUsers = data.map((user) => ({
					...user,
					isFollowing: false,
				  }));
                
				setUsers(updatedUsers);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchData();
	}, []);

	return (
        <>
			{users.map((user: User) => (
				<FollowCard
                user={user}
				handleClick={() => handleClick(user.id.value)}
                btnText={user.isFollowing ? "Unfollow" : "Follow"}
                />
			))}
        </>
    );
}
