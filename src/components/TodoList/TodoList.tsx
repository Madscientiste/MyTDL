import { Center, Loader, Stack } from "@mantine/core";

import { useTodos } from "@/api/getTodos";

import { TodoCard } from "../TodoCard";

export function TodoList() {
  const todos = useTodos();

  if (todos.isLoading) {
    return (
      <Center mih="10em">
        <Loader />
      </Center>
    );
  }

  return (
    <Stack pb="lg">
      {todos.data?.slice(0, 8).map((todo) => {
        return <TodoCard key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />;
      })}
    </Stack>
  );
}
