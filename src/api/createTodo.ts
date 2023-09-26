import { useMutation } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { TTodoItem } from "@/type";

export type TCreateTodoPayload = {
  data: {
    title: string;
    content?: string;
  };
};

export const createTodo = ({ data }: TCreateTodoPayload): Promise<TTodoItem> => {
  return axios.post("/todos/", data);
};

export const useCreateTodo = () => {
  return useMutation({});
};
