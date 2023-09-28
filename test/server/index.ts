import { handlers } from "./handlers";

export const initMocks = () => {
  if (import.meta.env.DEV) {
    const noWindow = typeof window === "undefined";

    if (noWindow) {
      import("msw/node").then(({ setupServer }) => {
        setupServer(...handlers).listen({ onUnhandledRequest: "bypass" });
      });
    } else {
      import("msw").then(({ setupWorker }) => {
        setupWorker(...handlers).start({ onUnhandledRequest: "bypass" });
      });
    }
  }
};
