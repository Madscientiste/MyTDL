import { BrowserRouter } from "react-router-dom";

import { TBaseProviderProps } from "@/type";

export function RouterProvider({ children }: TBaseProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
