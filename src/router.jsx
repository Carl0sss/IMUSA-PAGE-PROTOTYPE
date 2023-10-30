import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/Nosotros',
                element: <Nosotros />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;