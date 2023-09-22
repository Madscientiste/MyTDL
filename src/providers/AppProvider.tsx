import React, { Suspense } from "react";

import { Loader } from "@mantine/core";

import { TBaseProviderProps } from "@/type";

// import { ErrorBoundary } from "@/components/ErrorBoundary";
import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";

type TComposerProps = {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<TBaseProviderProps>>>;
  children: React.ReactNode;
};

function composer({ children, components = [] }: TComposerProps) {
  return components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, children);
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        {composer({
          children,
          components: [
            QueryProvider,
            RouterProvider,
            ThemeProvider,
            // ErrorBoundary,
            //
          ],
        })}
      </Suspense>
    </React.Fragment>
  );
}
