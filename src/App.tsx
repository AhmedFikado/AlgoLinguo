import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
	return (
		<section>
			<Header />
			<main>
				<Outlet />
			</main>
		</section>
	);
}

export default App;
