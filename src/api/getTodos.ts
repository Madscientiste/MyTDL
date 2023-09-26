import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { TTodoItem } from "@/type";

export const getTodos = (): Promise<TTodoItem[]> => {
  return axios.get("/todos/");
};

type TQueryFnType = typeof getTodos;

type TUseTodosOptions = {
  config?: QueryConfig<TQueryFnType>;
};

export const useTodos = ({ config }: TUseTodosOptions = {}) => {
  return useQuery<ExtractFnReturnType<TQueryFnType>>({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
    ...config,
  });
};
