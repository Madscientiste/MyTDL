import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Fallback } from "./Fallback";

export function GlobalErrorBoundary({ children }: { children: ReactNode }) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}
