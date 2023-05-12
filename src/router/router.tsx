import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);
