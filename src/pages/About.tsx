export default function About() {
	return (
		<section>
			<h2 className="text-2xl font-semibold text-center pt-6 pb-4">
				A propos du site
			</h2>
			<p className="text-center max-w-8/10 mx-auto pb-10">
				Notre application vous propose une approche ludique et progressive pour
				apprendre les bases de l'algorithmie en JavaScript. Développée pour les
				petits et les grands, nous vous guidons à travers des exercices
				interactifs et courts, chaque series de questions vous aide à développer
				votre logique.
			</p>
			<h2 className="text-2xl font-semibold text-center pt-6 pb-8">La team </h2>
			<div className="flex flex-wrap w-80 mx-auto md:flex-nowrap md:w-180 md:gap-6">
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-zombie.webp"
						alt="avatar zombie"
					/>
					<figcaption className="text-sm text-center md:text-base flex justify-center">
						Ahmed
                      <a href="https://github.com/AhmedFikado">
                      <img className="w-5 ml-2" src="/images/github-mark.svg" alt="icone github" />
                      </a>
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-licorne.webp"
						alt="avatar licorne"
					/>
					<figcaption className="text-sm text-center md:text-base flex justify-center">
						Anais
                         <a href="https://github.com/anacslr">
                      <img className="w-5 ml-2" src="/images/github-mark.svg" alt="icone github" />
                      </a>
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-panda.webp"
						alt="avatar panda"
					/>
					<figcaption className="text-sm text-center md:text-base flex justify-center">
						Guillaume
                         <a href="https://github.com/Guillaume-Z">
                      <img className="w-5 ml-2" src="/images/github-mark.svg" alt="icone github" />
                      </a>
					</figcaption>
				</figure>
				<figure>
					<img
						className="w-40"
						src="/images/Avatar-batman.webp"
						alt="avatar superheros"
					/>
					<figcaption className="text-sm text-center md:text-base flex justify-center">
						Rahmoun
                         <a href="https://github.com/rahmoundif">
                      <img className="w-5 ml-2" src="/images/github-mark.svg" alt="icone github" />
                      </a>
					</figcaption>
				</figure>
			</div>
			<h2 className="text-2xl font-semibold text-center pt-20 pb-4">
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
