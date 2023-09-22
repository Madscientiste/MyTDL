import { DefaultOptions, QueryClient, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PromiseValue } from "type-fest";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient: QueryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: unknown[]) => unknown> = PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: unknown[]) => unknown> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: unknown[]) => unknown> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
