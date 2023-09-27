import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { produce } from "immer";

import { axios } from "@/lib/axios";
import { notifications } from "@/lib/notifications";
import { queryClient } from "@/lib/react-query";
import { TTodoItem } from "@/type";

export type TCreateTodoPayload = {
  data: {
    title: string;
    description?: string;
  };
};

export const createTodo = ({ data }: TCreateTodoPayload): Promise<TTodoItem> => {
  return axios.post("/todos/", data);
};

type TUseCreateTodoOptions = {
  config?: UseMutationOptions<TTodoItem, AxiosError, TCreateTodoPayload>;
};

export const useCreateTodo = ({ config }: TUseCreateTodoOptions = {}) => {
  return useMutation({
    ...config,

    mutationFn: createTodo,
    onMutate: async (variables) => {
      await queryClient.cancelQueries(["todos"]);

      const prevTodos = queryClient.getQueryData<TTodoItem[]>(["todos"]) || [];

      queryClient.setQueryData<TTodoItem[]>(
        ["todos"],
        produce(prevTodos, (draft) => {
          const items = prevTodos.filter((t) => !t.completed);
          const last = items[items.length - 1];
          const idx = draft.indexOf(last);

          return [
            //
            ...draft.slice(0, idx),
            variables.data as TTodoItem,
            ...draft.slice(idx),
          ];
        }),
      );

      return { prevTodos };
    },
    onError: async () => {
      notifications.error({ message: "Something went wrong updating your item, try again !" });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
};
