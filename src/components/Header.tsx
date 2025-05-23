import { Link } from "react-router";

function Header() {
	return (
		<Link
			to="/"
			className="flex items-center justify-center bg-secondary h-[100px] cursor-pointer"
		>
			<img
				src="\images\Avatar-header.webp"
				alt="Une mascotte d'ordinateur vert tout mimi"
				className="w-[100px] h-auto"
			/>
			<h1 className="text-6xl text-primary">AlgoLinguo</h1>{" "}
		</Link>
	);
}

export default Header;
