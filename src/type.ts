import { ReactNode } from "react";

export type TBaseProviderProps = {
  children: ReactNode;
};

export type TTodoItem = {
  id: string;

  title: string;
  content?: string;
  completed: boolean;

  createdAt: Date;
  updatedAt: Date;
};
