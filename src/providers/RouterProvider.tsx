import { BrowserRouter } from "react-router-dom";

import { TBaseProviderProps } from "@/type";

export function RouterProvider({ children }: TBaseProviderProps) {
  return <BrowserRouter basename={"__VITE_APP_BASE_PATH__"}>{children}</BrowserRouter>;
}
