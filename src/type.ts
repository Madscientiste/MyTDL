import { ReactNode } from "react";

export type TBaseProviderProps = {
  children: ReactNode;
};

export type TTodoItem = {
  id: string;

  title: string;
  content?: string;

  createdAt: Date;
  updatedAt: Date;

  completed: boolean;
};
