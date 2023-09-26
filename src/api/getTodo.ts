import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { TTodoItem } from "@/type";

export const getTodo = ({ id }: { id: TTodoItem["id"] }): Promise<TTodoItem> => {
  return axios.get(`/todos/${id}/`);
};

type QueryFnType = typeof getTodo;

type UseDiscussionOptions = {
  id: TTodoItem["id"];
  config?: QueryConfig<QueryFnType>;
};

export const useDiscussion = ({ id, config }: UseDiscussionOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["todos", id],
    queryFn: () => getTodo({ id }),
  });
};
