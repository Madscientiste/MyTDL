import { render as rtlRender, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppProviders } from "@/providers";

import { todoGenerator } from "./generators";
import { db } from "./server/db";

export const createTodo = async (overrides?: Record<string, any>) => {
  const user = todoGenerator(overrides);
  return db.todo.create(user);
};

export const getTodo = async (id: string) => {
  return db.todo.findFirst({ where: { id: { equals: id } } });
};

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => screen.queryAllByLabelText(/loader/i), {
    timeout: 4000,
  });

export async function render(element: React.ReactElement) {
  window.history.pushState({}, "Test page", "/");

  const utils = rtlRender(element, {
    wrapper: AppProviders,
  });

  await waitForLoadingToFinish();

  return utils;
}

export * from "@testing-library/react";
export { userEvent, rtlRender };
