import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import ExercisePageNewbies from "./pages/ExercisePageNewbies";
import App from "./App.tsx";
import Home from "./pages/Home";

// import About from "./pages/About";

/* ************************************************************************* */

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
			     path: "/",
			    element: <Home />,
		   },
			//   {
			//     path: "/About",
			//     element: <About />,
			//   },
			{
				path: "/exercice/newbie",
				element: <ExercisePageNewbies />,
			},
		],
	},
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
