import { Link } from "react-router";

interface button_type {
	name: string;
	background: string;
	image: string;
	link: string;
	progress?: boolean;
}

function Button_Home_Level({
	name,
	background,
	image,
	link,
	progress,
}: button_type) {
	return (
		<Link to={link}>
			<button
				type="button"
				className={`text-black shadow-sm text-2xl md:text-4xl lg:text-3xl font-semibold p-5 flex flex-col items-center rounded-xl lg:cursor-pointer ${background}`}
			>
				{image && <img src={image} alt={name} />}
				{name}
				{progress && (
					<img
						src="/images/check2-circle.svg"
						alt="validate"
						className="w-6 md:w-12 pt-3 md:pt-6"
					/>
				)}
			</button>
		</Link>
	);
}

export default Button_Home_Level;
