import { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Loader } from "@mantine/core";

import { AppLayout } from "@/components/AppLayout";
import { TodoDetails } from "@/components/TodoDetails";
import { TodoList } from "@/components/TodoList";

export function AppShell() {
  return (
    <AppLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      { path: "/", element: <TodoList /> },
      { path: "/todos/:id", element: <TodoDetails /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
