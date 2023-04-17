import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/main.page";
import {ErrorPage} from "./error.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <div>Strona Główna</div>,
            },
            {
                path: "/kursy-nbp",
                element: <div>Kursy NBP</div>,
            },
            {
                path: "/VAT-VIES",
                element: <div>VAT VIES</div>,
            },
            {
                path: "/NIP",
                element: <div>Informacja NIP, REGON</div>,
            },
        ]
    },
]);