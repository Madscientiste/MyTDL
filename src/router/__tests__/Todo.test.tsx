import { createTodo, queryHelpers, render, screen, userEvent } from "@test/utils";
import { test, vitest } from "vitest";

// import { render, screen } from "@/test/test-utils";
import { Todo } from "../Todo";

vitest.mock("react-router-dom", async (orignal) => {
  const obj = await orignal();
  return Object.assign({}, obj);
});

async function renderTodo() {
  const fakeTodo = await createTodo();
  const ReactRouterDom = await import("react-router-dom");

  ReactRouterDom.useParams = vitest.fn().mockReturnValue({
    id: fakeTodo.id,
  });

  const utils = await render(<Todo />);
  return { ...utils, fakeTodo };
}

test("should render todo", async () => {
  const { fakeTodo } = await renderTodo();
  expect(screen.getByText(fakeTodo.title)).toBeInTheDocument();
  expect(screen.getByText(fakeTodo.description)).toBeInTheDocument();
});
