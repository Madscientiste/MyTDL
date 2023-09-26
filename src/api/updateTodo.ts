import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { produce } from "immer";

import { axios } from "@/lib/axios";
import { notifications } from "@/lib/notifications";
import { queryClient } from "@/lib/react-query";
import { TTodoItem } from "@/type";

export type TUpdateTodoPayload = {
  id: number | string;
  data: {
    title?: string;
    content?: string;
    completed?: boolean;
  };
};

export const updateTodo = ({ id, data }: TUpdateTodoPayload): Promise<TTodoItem> => {
  if (id == 5) id = "null/s";
  return axios.patch(`/todos/${id}/`, data);
};

type TUseUpdateTodoOptions = {
  config?: UseMutationOptions<TTodoItem, AxiosError, TUpdateTodoPayload>;
};

export function useUpdateTodo({ config }: TUseUpdateTodoOptions = {}) {
  return useMutation({
    ...config,

    mutationFn: updateTodo,
    onMutate: async (variables) => {
      await queryClient.cancelQueries(["todos", variables.id]);
      const prevTodos = queryClient.getQueryData<TTodoItem[]>(["todos"]) || [];

      const prevTodoIdx = prevTodos?.findIndex((v) => v.id == variables.id);
      const prevTodo = prevTodos[prevTodoIdx];

      const newTodo = produce(prevTodo, (draft) => ({ ...draft, ...variables.data }));

      // Update the single todo AND also the whole list
      queryClient.setQueryData(["todos", newTodo.id], newTodo);
      queryClient.setQueryData<TTodoItem[]>(["todos"], (old) =>
        produce(old, (draft) => {
          if (draft === undefined) return [newTodo];
          draft[prevTodoIdx] = newTodo;

          return draft;
        }),
      );

      return { prevTodos };
    },
    onError: async () => {
      notifications.error({ message: "Something went wrong updating your item, try again !" });
    },

    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);

      // .sort((a, b) => new Date(a.updatedAt).valueOf() - new Date(b.updatedAt).valueOf());
    },
  });
}
