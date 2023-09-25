/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type ExtractFnReturnType<FnType extends (...args: any[]) => any> = PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any[]) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any[]) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
