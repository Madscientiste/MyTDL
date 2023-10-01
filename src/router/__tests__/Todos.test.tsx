import { todoGenerator } from "@test/generators";
import { createTodo, render, screen, userEvent, waitFor } from "@test/utils";
import { test, vitest } from "vitest";

import { Todos } from "../Todos";

vitest.mock("react-router-dom", async (orignal) => {
  const obj = await orignal();
  return Object.assign({}, obj);
});

test("should add a new todo", async () => {
  const newTodo = todoGenerator();
  await render(<Todos />);

  expect(await screen.findByText(/There are no tasks yet/i)).toBeInTheDocument();

  const titleField = screen.getByRole<HTMLInputElement>("textbox");
  await userEvent.type(titleField, newTodo.title);

  const addButton = screen.getByRole("button", { name: "Add" });
  await userEvent.click(addButton);

  await waitFor(() => expect(titleField.value).toBe(""));
  expect(await screen.findByText(newTodo.title)).toBeInTheDocument();
});

test("should render list of todos", async () => {
  let todos = await Promise.all(Array.from(Array(5)).map(() => createTodo()));

  await render(<Todos />);

  for (const todo of todos) {
    expect(screen.getByLabelText(todo.title)).toBeInTheDocument();
  }
});

test("should mark todo as completed", async () => {
  const todos = await Promise.all(Array.from(Array(5)).map(() => createTodo()));
  const randIdx = Math.floor(Math.random() * todos.length);

  const todo = todos[randIdx];

  await render(<Todos />);

  const cardRoot = screen.getByLabelText(`${todo.title}-card`);
  const cardCheckbox = screen.getByLabelText(`${todo.title}-checkbox`);

  userEvent.click(cardCheckbox);

  // Good enough for now, as the CSS does the rest of the job ( coloring & strikethough )
  await waitFor(() => {
    return expect(cardRoot).toHaveAttribute("data-checked", "true");
  });
});
