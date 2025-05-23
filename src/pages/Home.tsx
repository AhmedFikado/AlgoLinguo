import Button_Home_Level from "../components/Buttons/Button_Home_Level";
import { useProgress } from "../hooks/ExerciseContext";

function Home() {
	const { progress } = useProgress();
	return (
		<section>
			<div className="mt-15 lg:mt-30 mx-25 grid gap-10 md:mx-auto md:w-1/2 lg:w-5/8 lg:flex animate-fade-in">
				<div className="lg:hover:scale-110 ease-in-out duration-300">
					<Button_Home_Level
						name="Débutant"
						background="bg-yellow-300"
						image="/images/avatar-bebe.webp"
						link="/exercice/newbies"
						progress={progress.newbie}
					/>
				</div>
				<div className="lg:hover:scale-110 ease-in-out duration-300">
					<Button_Home_Level
						name="Intermédiaire"
						background="bg-orange-300"
						image="/images/avatar-etudiant.webp"
						link="/exercice/intermediaire"
						progress={progress.intermediate}
					/>
				</div>
				<div className="lg:hover:scale-110 ease-in-out duration-300">
					<Button_Home_Level
						name="Difficile"
						background="bg-red-300"
						image="/images/avatar-senior.webp"
						link="/exercice/master"
						progress={progress.master}
					/>
				</div>
			</div>
		</section>
	);
}

export default Home;
