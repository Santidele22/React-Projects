

import "./avatar.css";

interface avatarProps {
	img: string;
	alt: string;
	
}
export function Avatar({ img, alt }: avatarProps) {
	return (
		<figure >
			<img src={img} alt={alt} />
		</figure>
	);
}
