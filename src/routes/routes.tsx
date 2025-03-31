import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {ADIDAS} from "../components/pages/ADIDAS";
import React from "react";
import {PUMA} from "../components/pages/PUMA";
import {ABIBAS} from "../components/pages/ABIBAS";
import {Model} from "../components/pages/Model";
import {Prices} from "../components/pages/Prices";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    Model: '/:model/:id',
    Prices: '/price',

} as const;

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error404/>,
        children: [
            {path: PATH.ADIDAS, element: <ADIDAS/>},
            {path: PATH.PUMA, element: <PUMA/>},
            {path: PATH.ABIBAS, element: <ABIBAS/>},
            {path: PATH.Model, element: <Model/>},
            {path: PATH.Prices, element: <Prices/>},
        ]
    }
])