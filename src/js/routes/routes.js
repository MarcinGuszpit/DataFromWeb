import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/main.page";
import {ErrorPage} from "./error.page";
import {MfPage} from "../pages/mf.page";
import {VATVIESPage} from "../pages/vatVies.page";
import {NBPPage} from "../pages/nbp.page";
import {PrintPage} from "../pages/print.page";
import {DescriptionPage} from "../pages/description.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <DescriptionPage/>,
            },
            {
                path: "/kursy-nbp",
                element: <NBPPage/>,
            },
            {
                path: "/VAT-VIES",
                element: <VATVIESPage/>,
            },
            {
                path: "/NIP",
                element: <MfPage/>,
            },
            {
                path: "/PrintOut",
                element: <PrintPage/>,
            }
        ]
    },
]);