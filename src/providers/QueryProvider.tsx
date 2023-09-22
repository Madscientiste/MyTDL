import { useState } from "react";

import { useHotkeys } from "@mantine/hooks";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/lib/react-query";
import { TBaseProviderProps } from "@/type";

export function QueryProvider({ children }: TBaseProviderProps) {
  const [queryDevTools, setQueryDevTools] = useState(false);
  useHotkeys([["ctrl + 1", () => setQueryDevTools(!queryDevTools)]]);

  const showDevTools = import.meta.env.DEV && queryDevTools;

  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  );
}
