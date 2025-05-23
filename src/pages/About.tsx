export default function About() {
	return (
		<section>
			<h2 className="font-[Jersey 15, sans-serif] text-lg font-semibold text-center pt-6 pb-4">
				A propos du site
			</h2>
			<p className="text-center max-w-8/10 mx-auto pb-4">
				Notre application vous propose une approche ludique et progressive pour
				apprendre les bases de l'algorithmie en JavaScript. Développée pour les
				petits et les grands, nous vous guidons à travers des exercices
				interactifs et courts, chaque series de questions vous aide à développer
				votre logique.
			</p>
			<h2 className="text-lg font-semibold text-center pt-6 pb-5">La team </h2>
			<div className="flex flex-wrap w-80 mx-auto md:flex-nowrap md:w-180 md:gap-6">
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-zombie.webp"
						alt="avatar zombie"
					/>
					<figcaption className="text-sm text-center md:text-base">
						Ahmed
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-licorne.webp"
						alt="avatar licorne"
					/>
					<figcaption className="text-sm text-center md:text-base">
						Anais
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-panda.webp"
						alt="avatar panda"
					/>
					<figcaption className="text-sm text-center md:text-base">
						Guillaume
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-batman.webp"
						alt="avatar superheros"
					/>
					<figcaption className="text-sm text-center md:text-base">
						Rahmoun
					</figcaption>
				</figure>
			</div>
			<h2 className="text-lg font-semibold text-center pt-10 pb-4">
				Le protojam
			</h2>
			<p className="text-center max-w-8/10 mx-auto pb-8">
				Ce projet a été développé dans le cas du hackaton, qui avait pour
				objectif de produire une démo fonctionelle d'un outil d'initiation
				au code.
			</p>
		</section>
	);
}
