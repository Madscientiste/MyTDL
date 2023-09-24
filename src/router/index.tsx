import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Loader } from "@mantine/core";

import { Todo } from "./Todo";
import { Todos } from "./Todos";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      { path: "/", element: <Todos /> },
      { path: "/todos/:id", element: <Todo /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export function AppShell() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export function AppRoutes() {
  return useRoutes(publicRoutes);
}
