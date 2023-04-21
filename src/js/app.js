import {createRoot} from 'react-dom/client';
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";
import {AppContextProvider} from "./context/App.context";


const appNode = document.getElementById("App");
const app = createRoot(appNode);
app.render(
    <React.Fragment>
        <AppContextProvider>
            < RouterProvider router={router}>
            </RouterProvider>
        </AppContextProvider>
    </React.Fragment>);