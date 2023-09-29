import "@testing-library/jest-dom";

import { queryClient } from "@/lib/react-query";

import { resetDb } from "./server/db";
import { server } from "./server/server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// general cleanup
afterEach(async () => {
  queryClient.clear();
  resetDb();
});
