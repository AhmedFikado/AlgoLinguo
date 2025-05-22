import { Outlet } from "react-router";
import Header from "./components/Header";
import "./App.css";

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
