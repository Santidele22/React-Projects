import { imgSizes } from "./enums/img.enum";

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


export interface User {
	name: Name;
	login: Login;
	id: UserId;
	picture: imgSizes;
}
