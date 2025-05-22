import Button_Home_Level from "../components/Buttons/Button_Home_Level";

function Home() {
	return (
		<section>
			<div className="mt-15 lg:mt-30 mx-25 grid gap-10 md:mx-auto md:w-1/2 lg:w-5/8 lg:flex ">
				<Button_Home_Level
					name="Débutant"
					background="bg-yellow-300"
					image="\images\avatar-bebe.webp"
					link=""
				/>
				<Button_Home_Level
					name="Intermédiaire"
					background="bg-orange-300"
					image="\images\avatar-etudiant.webp"
					link=""
				/>
				<Button_Home_Level
					name="Difficile"
					background="bg-red-300"
					image="\images\avatar-senior.webp"
					link=""
				/>
			</div>
		</section>
	);
}

export default Home;
