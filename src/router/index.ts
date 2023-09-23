import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export function AppRoutes() {
  return useRoutes(publicRoutes);
}
