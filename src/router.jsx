import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import ArtesGraficas from "./pages/ArtesGraficas";
import Industria from "./pages/Industria";
import Contactactanos from "./pages/Contactactanos";
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
            },
            {
                path: '/ArtesGraficas',
                element: <ArtesGraficas />
            },
            {
                path: '/Industria',
                element: <Industria />
            },
            {
                path: '/Contactanos',
                element: <Contactactanos />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;