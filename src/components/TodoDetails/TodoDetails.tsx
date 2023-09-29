import { Link, useNavigate, useParams } from "react-router-dom";

import { ActionIcon, Group, Loader, NavLink, Paper, Stack, Text } from "@mantine/core";
import { IconChevronLeft, IconTrash } from "@tabler/icons-react";

import { useGetTodo } from "@/api/getTodo";
import { useDeleteTodo } from "@/api/useDeleteTodo";

import { NotFound } from "../NotFound";

// import classes from "./TodoDetails.module.css";

const formatDate = (date: Date) => {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isToday = date.toDateString() === now.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();
  const options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

  if (isToday || isYesterday) {
    const prefix = (isToday && "Today") || (isYesterday && "Yesterday");
    return `${prefix} at ${date.toLocaleString("en-US", options)}`;
  }

  return date.toLocaleDateString("en-US", { ...options, year: "numeric", month: "2-digit", day: "2-digit" });
};

export function TodoDetails() {
  const { id = 0 } = useParams();
  const todo = useGetTodo({ id });
  const mutation = useDeleteTodo();
  const navigate = useNavigate();

  const handleDelete = async () => {
    mutation.mutate({ id });
    navigate("/");
  };

  if (todo.isLoading) {
    return <Loader aria-label="loader" />;
  }

  if (!todo.data) {
    return <NotFound />;
  }

  return (
    <Paper bg="transparent" miw={400}>
      <Stack align="stretch">
        <Group wrap="nowrap" justify="end">
          <NavLink
            p={0}
            color="gray.9"
            variant="subtle"
            component={Link}
            to="/"
            label="Go back"
            leftSection={<IconChevronLeft size={16} stroke={1.5} />}
            active
          />

          <ActionIcon onClick={handleDelete} size="sm" color="red.5" variant="light" loading={mutation.isLoading}>
            <IconTrash size={18} stroke={1.5} />
          </ActionIcon>
        </Group>

        <Paper p="md" withBorder>
          <Text size="xl">{todo.data.title}</Text>
          <Text size="sm" c="dimmed">
            {todo.data.description ?? "No description provided"}
          </Text>
        </Paper>

        <Stack gap={2} px="xs">
          <Group justify="space-between">
            <Text fw="bold" size="xs" c="dimmed">
              Created
            </Text>
            <Text size="xs" c="dimmed">
              {formatDate(new Date(todo.data.created_at))}
            </Text>
          </Group>

          <Group justify="space-between">
            <Text fw="bold" size="xs" c="dimmed">
              Updated
            </Text>
            <Text size="xs" c="dimmed">
              {formatDate(new Date(todo.data.updated_at))}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
}
