import { Main } from "@/root/Root";
import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const constRoutes = [
  { id: "Home", path: "/", element: <Home /> },
  { id: "About", path: "/about", element: <About /> },
] as const;

export const routes: RouteObject[] = [...constRoutes];

export const pathsByName = Object.fromEntries(
  constRoutes.map((route) => [route.id, route.path])
) as {
  [k in typeof constRoutes[number]["id"]]: typeof constRoutes[number]["path"];
};

export const routeIndexByPath: { [k: string]: number } = Object.fromEntries(
  routes.map((route, index) => [route.path, index])
);

const statusRoutes: RouteObject[] = [
  { id: "404", path: "*", element: <NotFound /> },
];

const routerRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [...routes, ...statusRoutes],
  },
];

export const router = createBrowserRouter(routerRoutes);
