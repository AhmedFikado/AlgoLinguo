import { useState } from "react";
interface Quizz {
	instruction: string;
	rightAnswer: string[];
	choices: string[];
}

function ExercisePageNewbies() {
	const quizz: Quizz[] = [
		{
			instruction: "Créer une fonction qui renvoie le reste de la division de x par y",
			rightAnswer: ["function","modulo(x,y){", "return", "x % y;}"],
			choices: [
				"modulo(x,y){",
				"function",
				"x % y;}",
				"return"
			],
		},
		{
			instruction: "Parcourir le tableau de nombre \"arrayNumber\" et afficher la valeur double de chacun des nombres qui le composent",
			rightAnswer: ["for","const number","of arrayNumber){", "console.log(", "number * 2);}"],
			choices: [
				"const number",
				"console.log(",
				"for",
				"of arrayNumber){",
				"number * 2);}"
			],
		},
		{
			instruction: "Créer une fonction qui renvoie \"vraie\" si x est pair et y est impair",
			rightAnswer: ["function","evenAndOdd(x,y){", "if", "(x % 2 === 0", "&& y % 2 !== 0){","return true;}","else {","return false;}}"],
			choices: [
				"evenAndOdd(x,y){",
				"return true;}",
				"&& y % 2 !== 0){",
				"return false;}}",
				"function",
				"(x % 2 === 0",
				"if",
				"else {"
			],
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
export default ExercisePageNewbies;
