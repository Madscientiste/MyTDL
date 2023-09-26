import { Center, Loader, Stack } from "@mantine/core";
import { AnimationProps, motion } from "framer-motion";

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
        const transition: AnimationProps["transition"] = {
          type: "spring",
          duration: 0.5,
        };

        return (
          <motion.div key={todo.id} transition={transition} layout>
            <TodoCard id={todo.id} title={todo.title} completed={todo.completed} />
          </motion.div>
        );
      })}
    </Stack>
  );
}
