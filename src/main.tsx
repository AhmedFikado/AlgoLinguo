import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import ExercisePageNewbies from "./pages/ExercisePageNewbies";
import App from "./App.tsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Merch from "./pages/Merch.tsx";
import NotFound from "./pages/NotFound.tsx";
import ExercisePageMaster from "./pages/ExercisePageMaster.tsx";
import ExercisePageIntermediary from "./pages/ExercisePageIntermediary.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},

			{
				path: "/about",
				element: <About />,
			},

			{
				path: "/exercice/newbies",
				element: <ExercisePageNewbies />,
			},
			{
				path: "/merch",
				element: <Merch />,
			},
			{
				path: "/exercice/intermediaire",
				element: <ExercisePageIntermediary />,
			},
			{
				path: "/exercice/master",
				element: <ExercisePageMaster />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
