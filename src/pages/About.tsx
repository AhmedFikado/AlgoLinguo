export default function About() {



    return(
        <>
        <h2 className="font-semibold text-center p-6">A propos du site</h2>
        <p className="max-w-5/6 mx-auto p-6">Notre application vous propose une approche ludique et progressive pour apprendre les bases de l'algorithmie en JavaScript.
            Développée pour les petits et les grands, nous vous guidons à travers des exercices interactifs et courts, chaque series de questions vous aide à développer votre logique. 
        </p>
        <h2 className="font-semibold text-center pt-6 pb-4">La team </h2>
        <div className="flex flex-wrap w-80 mx-auto">
            <figure>
            <img className="w-40" src="src/assets/images/Avatar-zombie.webp" alt="avatar zombie" />
            <figcaption className="text-xs text-center">Ahmed</figcaption>
            </figure>
            <figure>
            <img className="w-40" src="src/assets/images/Avatar-licorne.webp" alt="avatar licorne" />
            <figcaption className="text-xs text-center">Anais</figcaption>
            </figure>
            <figure>
            <img className="w-40" src="src/assets/images/Avatar-batman.webp" alt="avatar superheros" />
            <figcaption className="text-xs text-center">Guillaume</figcaption>
            </figure>
            <figure>
            <img className="w-40" src="src/assets/images/Avatar-panda.webp" alt="avatar panda" />
            <figcaption className="text-xs text-center">Rahmoun</figcaption>
            </figure>
        </div>
        <h2 className="font-semibold text-center pt-8 pb-4">Le protojam</h2>
        <p className="max-w-5/6 mx-auto">Ce projet a été développé dans le cas du hackaton, qui avait pour objectif de produire une démo fonctionelle d'un outil d'initialisation au code.</p>
        </>
    )

}