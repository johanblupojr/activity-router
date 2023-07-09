import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import NavNames from "./components/NavNames";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Root from "./Root";
import Product from "./pages/Product";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "activity-router",
                element: <Home />,
            },
            {
                path: "product",
                element: <Product />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
    { path: "login", element: <Login /> },
]);

function App() {
    return (
        <div className="App">
            <div className="nav-bar">
                {/* <Home /> */}
                {/* <NavNames /> */}
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
