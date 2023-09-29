import { factory, primaryKey } from "@mswjs/data";
import { DATABASE_INSTANCE } from "@mswjs/data/lib/glossary";

export const db = factory({
  todo: {
    id: primaryKey(String),
    title: String,
    description: String,
    completed: Boolean,
    created_at: Number,
    updated_at: Number,
  },
});

export type Model = Exclude<keyof typeof db, typeof DATABASE_INSTANCE>;

export const loadDb = () => Object.assign(JSON.parse(window.localStorage.getItem("msw-db") || "{}"));

export const persistDb = (model: Model) => {
  if (process.env.NODE_ENV === "test") return;
  const data = loadDb();
  data[model] = db[model].getAll();
  window.localStorage.setItem("msw-db", JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, unknown>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
