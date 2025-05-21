import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import './index.css'
import App from './App.tsx'

// import About from "./pages/About";
// import Home from "./pages/Home";


/* ************************************************************************* */

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//     ],
//   }, 
// ]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
// if (rootElement != null) {
//   ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
// }