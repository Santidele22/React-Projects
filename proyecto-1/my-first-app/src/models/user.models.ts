
interface Name {
	title: string;
	first: string;
	last: string;
}
interface Login {
	username: string;
}
interface UserId {
	name: string;
	value: string;
}
export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}

export interface User {
	name: Name;
	login: Login;
	id: UserId;
	picture: Picture;
	isFollowing:boolean
}
