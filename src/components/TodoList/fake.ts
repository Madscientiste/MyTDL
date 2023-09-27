import { TTodoItem } from "@/type";

const generateDateFields = () => ({
  createdAt: new Date(),
  updatedAt: new Date(),

  completed: !!Math.floor(Math.random() * 2),
});

export const fakeTodoItems: TTodoItem[] = [
  {
    id: generateId(),
    title: "Baking eggs using forks",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Call uncle python to drink with java",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Write a blog post about how C++ is slower than lua",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Buy eggs from the soup store",

    ...generateDateFields(),
  },
];
