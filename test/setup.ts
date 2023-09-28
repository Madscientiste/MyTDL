import "@testing-library/jest-dom/extend-expect";

import { queryClient } from "@/lib/react-query";

import { server } from "./server";
import { resetDb } from "./server/db";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// general cleanup
afterEach(async () => {
  queryClient.clear();
  resetDb();
});
