import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<section className="max-md:mb-25 mb-30">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</section>
	);
}

export default App;
