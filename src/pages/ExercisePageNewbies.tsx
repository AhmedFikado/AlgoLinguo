import { useState } from "react";
import { Link } from "react-router";
import confetti from "canvas-confetti";

interface Quizz {
	instruction: string;
	rightAnswer: string[];
	choices: string[];
}

function ExercisePageNewbies() {
	const quizz: Quizz[] = [
		{
			instruction: "Afficher 'Hello World'",
			rightAnswer: ["console.log(","'Hello World');"],
			choices: [
				"'Hello World');",
				"console.log(",
			],
		},
		{
			instruction: "Stocker la valeur 5 dans la variable x",
			rightAnswer: ["const"," x ","=", " 5;"],
			choices: [								
				"=",
				" 5;",
				" x ",
				"const",
			],
		},
		{
			instruction: "Afficher la somme de deux nombres a et b",
			rightAnswer: ["console.log(","a"," + ","b);"],
			choices: [ "b);"," + ","console.log(", "a",],
		},
	];
	const [userAnswer, setUserAnswer] = useState<string[]>([]);
	const [feedback, setFeedback] = useState<string>("");
	const [question, setquestion] = useState(0);
	const current = quizz[question];
	const feedbackValue = ["valid", "invalid", "done"];
	const showButton = feedbackValue.includes(feedback);

	// This allows the answer to be displayed end by end
	const handleClick = (newEl: string) => {
		setUserAnswer([...userAnswer, newEl]);
	};

	// Allows to compare arrays
	const handleValidate = () => {
		if (JSON.stringify(userAnswer) === JSON.stringify(current.rightAnswer)) {
			setFeedback("valid");
		} else {
			setFeedback("invalid");
		}
	};

	// Reset if userAnswer is wrong
	const handleReset = () => {
		setUserAnswer([]);
		setFeedback("");
	};

	/* 
	Checks if we're not at the last question, 
	if not we go to the next question and reset all
	*/
	const handleNext = () => {
		if (question < quizz.length - 1) {
			setquestion(question + 1);
			handleReset();
		} else {
			setFeedback("done");
			sendConfettis();
		}
	};

	// Confettis !!!
	const sendConfettis = () => {
		confetti({
			particleCount: 550,
			spread: 180,
			origin: { y: 0.5 },
			ticks: 2000,
		});
	}

	return (
		<main className="text-center min-h-[calc(100vh-100px)] px-2 py-8">
			<section className="flex flex-col items-center gap-6 md:gap-10 max-w-3xl mx-auto">
				<h2 className="font-bold text-2xl md:text-4xl">
					{current.instruction}
				</h2>

				<article className="mt-4 flex flex-wrap justify-center gap-2">
					{userAnswer.map((el) => (
						<span
							key={el}
							className="px-3 py-1 border-1 border-black bg-amber-50 rounded-2xl text-lg md:text-xl"
						>
							{" "}
							{el}
						</span>
					))}
				</article>

				<article className="flex justify-center gap-3 flex-wrap mt-4">
					{current.choices.map((el) => (
						<button
							type="button"
							key={el}
							onClick={() => handleClick(el)}
							className="px-6 py-3 font-bold bg-amber-50 rounded-2xl text-lg md:text-xl hover:bg-amber-100 border-1 border-primary text-primary"
						>
							{el}
						</button>
					))}
				</article>
				{!showButton && (
					<button
						type="button"
						onClick={handleValidate}
						className="p-3 px-12 md:p-4 md:px-16 bg-primary text-white w-fit mx-auto rounded-2xl mt-4 text-lg md:text-xl hover:bg-[#326708]"
					>
						Valider
					</button>
				)}

				{feedback === "valid" && (
					<article className="mt-6 flex flex-col items-center">
						<button
							type="button"
							onClick={handleNext}
							className="mt-2 px-12 p-3 md:p-4 md:px-16 bg-primary text-white rounded-2xl text-lg md:text-xl hover:bg-[#326708]"
						>
							Question suivante
						</button>
						<img
							src="/assets/happy.png"
							alt="avatar with happy face"
							className="w-50 md:w-100"
						/>
					</article>
				)}

				{feedback === "invalid" && (
					<article className="mt-6 flex flex-col items-center">
						<button
							type="button"
							onClick={handleReset}
							className="mt-2 p-3 px-12 md:p-4 md:px-16 bg-primary text-white rounded-2xl text-lg md:text-xl hover:bg-[#326708]"
						>
							Réessayer
						</button>
						<img
							src="/assets/sad.png"
							alt="avatar with sad face"
							className="w-50 md:w-100"
						/>
					</article>
				)}

				{feedback === "done" && (
					<article className="mt-6 flex flex-col items-center">
						<Link
							to="/"
							className="mt-2 p-3 px-12 md:p-4 md:px-16 bg-primary text-white rounded-2xl text-lg md:text-xl hover:bg-[#326708]"
						>
							Retourner à l'accueil
						</Link>
						<img
							src="/assets/happy.png"
							alt="avatar with happy face"
							className="w-50 md:w-100"
						/>
					</article>
				)}
			</section>
		</main>
	);
}
export default ExercisePageNewbies;
