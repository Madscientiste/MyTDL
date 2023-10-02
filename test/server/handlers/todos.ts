import { rest } from "msw";

import { API_BASE_URL } from "@/config";
import { generateId } from "@/utils/snowflake";

import { db, persistDb } from "../db";
import { delayedResponse, sortTasks } from "../utils";

type TTodoBody = {
  title: string;
  content: string;
};

export const todoHandlers = [
  rest.get(`${API_BASE_URL}/todos/`, (_req, _res, ctx) => {
    try {
      let result = db.todo.findMany({}).sort(sortTasks as any);

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.post<TTodoBody>(`${API_BASE_URL}/todos/`, async (req, _res, ctx) => {
    try {
      const data = await req.json();
      const result = db.todo.create({
        ...data,
        id: generateId(),
        completed: false,
        created_at: Date.now(),
        updated_at: Date.now(),
      });

      persistDb("todo");
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.get(`${API_BASE_URL}/todos/:id/`, (req, _res, ctx) => {
    try {
      const { id } = req.params;
      const result = db.todo.findFirst({ where: { id: { equals: `${id}` } } });
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.patch<TTodoBody>(`${API_BASE_URL}/todos/:id/`, async (req, _res, ctx) => {
    try {
      const data = await req.json();
      const { id } = req.params;

      const result = db.todo.update({ where: { id: { equals: `${id}` } }, data });
      persistDb("todo");
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.delete(`${API_BASE_URL}/todos/:id/`, (req, _res, ctx) => {
    try {
      const { id } = req.params;
      const result = db.todo.delete({ where: { id: { equals: `${id}` } } });
      persistDb("todo");
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),
];
