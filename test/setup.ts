import "@testing-library/jest-dom";

import { queryClient } from "@/lib/react-query";

import { resetDb } from "./server/db";
import { server } from "./server/server";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());

beforeEach(async () => {
  server.resetHandlers();
  queryClient.clear();
  resetDb();
});
