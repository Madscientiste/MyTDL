export const initMocks = () => {
  if (import.meta.env.DEV) {
    const noWindow = typeof window === "undefined";

    if (noWindow) {
      import("./server").then(({ server }) => {
        server.listen({ onUnhandledRequest: "bypass" });
      });
    } else {
      import("./worker").then(({ worker }) => {
        worker.start({ onUnhandledRequest: "bypass" });
      });
    }
  }
};
