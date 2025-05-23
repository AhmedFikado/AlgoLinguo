import { Link } from "react-router";

function Header() {
	return (
		<section className="fixed bottom-0 left-0 w-full flex justify-center bg-primary h-15 items-center md:justify-center md:py-10">
			<Link to="/">
				<img
					src="/images/icons_159611.svg"
					alt="Retour à l'accueil"
					className="lg:hidden w-[45px] invert mr-25 cursor-pointer"
				/>
			</Link>
			<Link to="/merch">
				<img
					src="/images/cart2.svg"
					alt="Shop"
					className="lg:hidden w-[45px] pb-1 invert cursor-pointer"
				/>
			</Link>
			<Link to="/about">
				<img
					src="/images/information.png"
					alt="A propos"
					className="lg:hidden w-[40px] invert ml-25 cursor-pointer"
				/>
			</Link>
			<Link to="/about">
				<p className="max-lg:hidden text-white text-2xl underline mr-60 cursor-pointer hover:text-green-100">
					About
				</p>
			</Link>
			<p className="max-lg:hidden text-white text-2xl">
				Wild Code School - Copyright Team n°7
			</p>
			<Link to="/merch">
				<p className="max-lg:hidden text-white text-2xl underline ml-60 cursor-pointer">
					Boutique
				</p>
			</Link>
		</section>
	);
}

export default Header;
