import { Link } from "react-router";

function Header() {
	// Ajouter le link to du "a propos" quand on aura la page !!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------------------------------------

	return (
		<section className="fixed bottom-0 left-0 w-full flex justify-center bg-primary h-15 items-center md:justify-center md:flex-col md:py-10">
			<Link to="/">
				<img
					src="/images/icons_159611.svg"
					alt="Retour à l'accueil"
					className="md:hidden w-[45px] invert mr-30"
				/>
			</Link>
			<Link to="/">
				<img
					src="/images/information.png"
					alt="A propos"
					className="md:hidden w-[40px] invert ml-30"
				/>
			</Link>
			<Link to="/">
				<p className="max-md:hidden text-white text-2xl underline">About</p>
			</Link>
			<p className="max-md:hidden text-white text-2xl">
				Wild Code School - Copyright Team n°7
			</p>
		</section>
	);
}

export default Header;
