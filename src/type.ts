import { ReactNode } from "react";

export type TBaseProviderProps = {
  children: ReactNode;
};

export type TTodoItem = {
  id: number | string;

  title: string;
  content?: string;
  completed: boolean;

  created_at: string;
  updated_at: string;
};
