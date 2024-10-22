import "./avatar.css";
import { imgSizes } from "./img.enum";

interface avatarProps {
	img: string;
	alt: string;
	imgSize: imgSizes;
}
export function Avatar({ img, alt, imgSize }: avatarProps) {
	return (
		<figure className={imgSize}>
			<img src={img} alt={alt} />
		</figure>
	);
}
