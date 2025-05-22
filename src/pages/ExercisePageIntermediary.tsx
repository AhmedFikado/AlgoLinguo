import { useState } from "react";
import { useProgress } from "../hooks/ExerciseContext";
interface Quizz {
	instruction: string;
	rightAnswer: string[];
	choices: string[];
}

function ExercisePageIntermediary() {
	const { setProgress } = useProgress();
	const handleIntermediaryDone = () => {
		setProgress((el) => ({ ...el, intermediate: true }));
	};
	const quizz: Quizz[] = [
		{
			instruction: 'Si x est supérieur à 10, afficher "C\'est grand!"',
			rightAnswer: ["if", "(x > 10){", "console.log(", '"C\'est grand!");}'],
			choices: ["(x > 10){", '"C\'est grand!");}', "console.log(", "if"],
		},
		{
			instruction: "Afficher tous les nombres de 0 à 10",
			rightAnswer: [
				"for",
				"(let i = 0;",
				"i <= 10;",
				"i++){",
				"console.log(",
				"i);}",
			],
			choices: [
				"i <= 10;",
				"console.log(",
				"for",
				"i++){",
				"(let i = 0;",
				"i);}",
			],
		},
		{
			instruction: 'Créer une fonction qui renvoie la phrase "Hello World" ',
			rightAnswer: ["function", "sayHello(){", "return", '"Hello World";}'],
			choices: ["return", "function", '"Hello World";}', "sayHello(){"],
		},
	];
	const [userAnswer, setUserAnswer] = useState<string[]>([]);
	const [feedback, setFeedback] = useState<string>("");
	const [question, setquestion] = useState(0);
	const current = quizz[question];

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
		}
	};

	return (
		<main className="text-center">
			<button
				type="button"
				onClick={handleIntermediaryDone}
				className="p-20 w-200"
			>
				AUTRE TESSST
			</button>
			<h1 className="font-bold">{current.instruction}</h1>

			<article>
				{userAnswer.map((el) => (
					<span key={el}> {el}</span>
				))}
			</article>

			<article>
				{current.choices.map((el) => (
					<button type="button" key={el} onClick={() => handleClick(el)}>
						{el}
					</button>
				))}
			</article>

			<button type="button" onClick={handleValidate}>
				Valider
			</button>

			{feedback === "valid" && (
				<>
					<h2>c'est good</h2>
					<button type="button" onClick={handleNext}>
						Question suivante
					</button>
				</>
			)}

			{feedback === "invalid" && (
				<>
					<h2>Pas good</h2>
					<button type="button" onClick={handleReset}>
						Réessayer
					</button>
				</>
			)}
			{feedback === "done" && (
				<>
					<h2>Tu as terminé tous les exercices de cette catégorie !</h2>
					<button
						type="button"
						onClick={() => {
							setquestion(0);
							handleReset();
						}}
					>
						Recommencer
					</button>
				</>
			)}
		</main>
	);
}
export default ExercisePageIntermediary;
