import { BrowserRouter } from "react-router-dom";

import { APP_BASENAME } from "@/config";
import { TBaseProviderProps } from "@/type";

export function RouterProvider({ children }: TBaseProviderProps) {
  return <BrowserRouter basename={APP_BASENAME}>{children}</BrowserRouter>;
}
