import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionIcon, Divider, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconPencil, IconSquare, IconSquareCheck } from "@tabler/icons-react";

import { TTodoItem } from "@/type";

import classes from "./TodoCard.module.css";

type TTodoCardProps = {
  todoItem: Pick<TTodoItem, "id" | "title" | "content" | "createdAt" | "completedAt">;
};

export function TodoCard({ todoItem }: TTodoCardProps) {
  const [checked, setChecked] = useState(!!todoItem.completedAt);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setChecked((v) => !v);
  }, []);

  return (
    <Paper className={classes.paper} withBorder>
      <Group gap={0} align="stretch">
        <Stack className={classes.leftSection} onClick={handleClick}>
          <ThemeIcon
            className={classes.checkbox}
            onClick={handleClick}
            color={checked ? "lime.8" : "gray"}
            variant="transparent"
          >
            {!checked ? <IconSquare /> : <IconSquareCheck />}
          </ThemeIcon>
        </Stack>

        <Divider color="gray.2" size="sm" orientation="vertical" />

        <Stack className={classes.middleSection}>
          <Text td={checked ? "line-through" : undefined} size="lg">
            {todoItem.title}
          </Text>

          <Text size="xs" c="dimmed">
            {todoItem.content || "No description provided"}
          </Text>

          <Divider my="0.25em" variant="dashed" />

          <Text ml="auto" size="xs" c={checked ? "lime.7" : "dimmed"} fw="bold">
            {checked ? "Completed" : "Created"} at{" "}
            {(checked ? todoItem.completedAt : todoItem.createdAt)?.toISOString()}
          </Text>
        </Stack>

        <Stack className={classes.rightSection}>
          <ActionIcon onClick={() => navigate(`/todos/${todoItem.id}`)} size="sm" variant="transparent">
            <IconPencil />
          </ActionIcon>
        </Stack>
      </Group>
    </Paper>
  );
}
