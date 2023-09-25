import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Center, Loader } from "@mantine/core";

import { lazyImport } from "@/utils/lazyImport";

const { Todos } = lazyImport(() => import("./Todos"), "Todos");
const { Todo } = lazyImport(() => import("./Todo"), "Todo");

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
    <Suspense
      fallback={
        <Center mih="100vh">
          <Loader />
        </Center>
      }
    >
      <Outlet />
    </Suspense>
  );
}

export function AppRoutes() {
  return useRoutes(publicRoutes);
}
