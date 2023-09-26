import { ReactNode } from "react";

export type TBaseProviderProps = {
  children: ReactNode;
};

export type TTodoItem = {
  id: number;

  title: string;
  content?: string;
  completed: boolean;

  createdAt: string;
  updatedAt: string;
};
