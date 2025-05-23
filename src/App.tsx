import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { ProgressProvider } from "./hooks/ExerciseContext";

function App() {
	return (
		<ProgressProvider>
			<section className="max-md:mb-25 mb-30">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</section>
		</ProgressProvider>
	);
}

export default App;
