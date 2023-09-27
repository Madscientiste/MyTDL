import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axios } from "@/lib/axios";
import { notifications } from "@/lib/notifications";
import { queryClient } from "@/lib/react-query";
import { TTodoItem } from "@/type";

export type TDeleteTodoPayload = {
  id: number | string;
};

export const deleteTodo = ({ id }: TDeleteTodoPayload): Promise<void> => {
  return axios.delete(`/todos/${id}/`);
};

type TUseDeleteTodoOptions = {
  config?: UseMutationOptions<void, AxiosError, TDeleteTodoPayload>;
};

export function useDeleteTodo({ config }: TUseDeleteTodoOptions = {}) {
  return useMutation({
    ...config,

    mutationFn: deleteTodo,
    onMutate: async (variables) => {
      await queryClient.cancelQueries(["todos", variables.id]);
      const prevTodos = queryClient.getQueryData<TTodoItem[]>(["todos"]) || [];

      const prevTodoIdx = prevTodos?.findIndex((v) => v.id == variables.id);
      const prevTodo = prevTodos[prevTodoIdx];

      const newTodos = prevTodos.filter((t) => t.id != prevTodo.id);
      queryClient.setQueryData(["todos"], newTodos);

      return { prevTodos };
    },
    onError: async () => {
      notifications.error({ message: "Something went wrong updating your item, try again !" });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
}
