import { useCallback, useState } from "react";

import { ActionIcon, Divider, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconPencil, IconSquare, IconSquareCheck, IconTrash } from "@tabler/icons-react";

import classes from "./TodoCard.module.css";

type TTodoCardProps = {
  title: string;
  date: string;
};

export function TodoCard({ title, date }: TTodoCardProps) {
  const [checked, setChecked] = useState(false);

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
            {title}
          </Text>

          <Text size="xs" c="dimmed">
            No description provided
          </Text>

          <Divider my="0.25em" variant="dashed" />

          <Text ml="auto" size="xs" c={checked ? "lime.7" : "dimmed"} fw="bold">
            {checked ? "Completed " : "Created "}
            {date}
          </Text>
        </Stack>

        <Stack className={classes.rightSection}>
          <ActionIcon size="sm" variant="transparent">
            <IconPencil />
          </ActionIcon>

          <ActionIcon size="sm" variant="transparent" color="red.4">
            <IconTrash />
          </ActionIcon>
        </Stack>
      </Group>
    </Paper>
  );
}
