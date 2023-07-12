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
                path: "/activity-router/contact",
                element: <Contact />,
            },
            {
                path: "/activity-router",
                element: <Home />,
            },
            {
                path: "/activity-router/product",
                element: <Product />,
            },
            {
                path: "/activity-router/about",
                element: <About />,
            },
        ],
    },
    { path: "/activity-router/login", element: <Login /> },
]);


function App() {
    return (
        <div className="App">
            <div className="nav-bar">
                {/* <Home /> */}
                {/* <NavNames /> */}
                <RouterProvider router={router} basename="/activity-router" />
            </div>
        </div>
    );
}

export default App;