import { useEffect, useState } from "react";
import { User } from "../../../models/user.models";
import { userData } from "../../../services/user.services";
import { FollowCard } from "../card/follow-card";
export function FollowsCards() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data:User[] = await userData();
                
				setUsers(data);
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
                id={user.id}
                login={user.login}
                name={user.name}
                picture={user.picture}
                key={user.id.value}
                
                />
			))}
        </>
    );
}
