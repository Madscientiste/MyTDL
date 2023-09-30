import { rest } from "msw";

import { generateId } from "@/utils/snowflake";

import { db, persistDb } from "../db";
import { delayedResponse } from "../utils";

type TTodoBody = {
  title: string;
  content: string;
};

const APP_URL = process.env.NODE_ENV == "test" ? "http://localhost" : "";

export const todoHandlers = [
  rest.get(`${APP_URL}/api/todos/`, (_req, _res, ctx) => {
    try {
      const result = db.todo.findMany({
        orderBy: [{ completed: "asc" }, { updated_at: "asc" }],
      });

      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.post<TTodoBody>(`${APP_URL}/api/todos/`, async (req, _res, ctx) => {
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

  rest.get(`${APP_URL}/api/todos/:id/`, (req, _res, ctx) => {
    try {
      const { id } = req.params;
      const result = db.todo.findFirst({ where: { id: { equals: `${id}` } } });
      return delayedResponse(ctx.json(result));
    } catch (error: any) {
      return delayedResponse(ctx.status(400), ctx.json({ message: error?.message || "Server Error" }));
    }
  }),

  rest.patch<TTodoBody>(`${APP_URL}/api/todos/:id/`, async (req, _res, ctx) => {
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

  rest.delete(`${APP_URL}/api/todos/:id/`, (req, _res, ctx) => {
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
