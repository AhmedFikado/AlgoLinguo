import { Link } from "react-router";
function Merch() {
	return (
		<section>
			<p className="text-center mb-6 mt-2 lg:mb-14">
				Retrouvez tous nos produits sur la boutique en ligne !
			</p>
			<section className="flex flex-wrap gap-2 justify-center items-center text-center lg:gap-8">
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\tableau.png"
						alt="tableau"
					/>
					</Link>
					<h2 className="font-bold">Poster "Abbey Road"</h2>
					<h2>12€</h2>
				</article>
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\tshirt-enfant.png"
						alt="tshirt enfant"
					/>
					</Link>
					<h2 className="font-bold">T-shirt enfant</h2>
					<h2>Taille unique - 22€</h2>
				</article>
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\tshirt-homme.png"
						alt="tshirt homme"
					/>
					</Link>
					<h2 className="font-bold">T-shirt homme</h2>
					<h2>M L XL XXL - 28€</h2>
				</article>
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\tshirt-femme.png"
						alt="T-shirt femme"
					/>
					</Link>
					<h2 className="font-bold">T-shirt femme</h2>
					<h2>S M L - 28€</h2>
				</article>
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\tasse-heros.png"
						alt="tasse"
					/>
					</Link>
					<h2 className="font-bold">Tasse super-héros</h2>
					<h2>8€</h2>
				</article>
				<article className="shadow-sm bg-white w-[11rem] h-[14rem] lg:w-[18rem] lg:h-[20rem] lg:pt-4 flex flex-col items-center pt-2 rounded-2xl">
					<Link to="/*" >
					<img
						className="h-[10rem] lg:h-[15rem]"
						src="assets\carnet.png"
						alt="tasse"
					/>
					</Link>
					<h2 className="font-bold">Carnet de notes</h2>
					<h2>6€</h2>
				</article>
			</section>
		</section>
	);
}

export default Merch;
