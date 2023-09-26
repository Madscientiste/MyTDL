import React, { Suspense } from "react";

import { Loader } from "@mantine/core";

import { GlobalErrorBoundary } from "@/components/GlobalErrorBoundary";
import { TBaseProviderProps } from "@/type";

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
            RouterProvider,
            ThemeProvider,
            GlobalErrorBoundary,
            QueryProvider,
            //
          ],
        })}
      </Suspense>
    </React.Fragment>
  );
}
