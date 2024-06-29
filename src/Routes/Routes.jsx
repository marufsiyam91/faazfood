import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import SingleFood from "../Pages/SingleFood";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/shop/:id',
                element: <SingleFood />,
                loader: ({params}) => fetch(`http://localhost:8800/api/v1/foods/${params.id}`)
            } 
        ]
    },
    {
        path: '*',
        element: <h1>OOps page not found</h1>
    }
])

