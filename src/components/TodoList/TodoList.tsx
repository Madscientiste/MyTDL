import { Center, Loader, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
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
      <Paper p="xl" withBorder>
        <Stack align="center" gap={0}>
          <ThemeIcon color="orange.9" size="lg" variant="transparent">
            <IconAlertTriangle size={32} strokeWidth={1.5} />
          </ThemeIcon>

          <Text c="gray.9">There are no tasks yet.. start by adding some !</Text>
        </Stack>
      </Paper>

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
