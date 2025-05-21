import { useState } from "react";
interface Test {
	instruction: string;
	rightAnswer: string[];
	choices: string[];
}

function ExercisePageNewbies() {
	const quizz: Test[] = [
		{
			instruction: "Affiche 'Hello World'",
			rightAnswer: ["console.log('Hello World');"],
			choices: [
				"console.log('Hello World');",
				"for (let i = 0; i < 3; i++) {",
				"console.log(i);",
			],
		},
		{
			instruction: "Affiche la somme de deux nombres a et b",
			rightAnswer: ["function (a, b) {", "return a + b", "}"],
			choices: [
				"function ((a)(b)) {",
				"  console.log(ab);",
				"}",
				"console.log('Bonjour');",
				"function (a, b) {",
				"return a + b",
			],
		},
		{
			instruction: "Crée une variable 'age' et donne-lui la valeur 10",
			rightAnswer: ["let age = 10;"],
			choices: ["let age = 10;", "let age = 'dix';", "age = 10;"],
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
