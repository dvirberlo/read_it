import Layout from "@/components/layout/Layout";
import "@/index.css";
import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notFound/NotFound";
import { ReaderSettingsProvider } from "@/providers/readerSettingsProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ReaderProvider } from "./providers/readerProvider";
import { UserSettingsProvider } from "./providers/userSettingsProvider";

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

function Main() {
  return (
    <ReaderProvider>
      <ReaderSettingsProvider>
        <UserSettingsProvider>
          <Layout>
            <Outlet />
          </Layout>
        </UserSettingsProvider>
      </ReaderSettingsProvider>
    </ReaderProvider>
  );
}

const routerRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
    children: [...routes, ...statusRoutes],
  },
];

const router = createBrowserRouter(routerRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
