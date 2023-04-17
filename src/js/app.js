import {createRoot} from 'react-dom/client';
import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";


const appNode = document.getElementById("App");
const app = createRoot(appNode);
app.render(
    <React.Fragment>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.Fragment>);