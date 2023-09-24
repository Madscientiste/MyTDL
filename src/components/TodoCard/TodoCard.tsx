import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionIcon, Box, Checkbox, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

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
      <Group gap={0} align="stretch" wrap="nowrap">
        <Stack className={classes.leftSection} onClick={handleClick}>
          <Box className={classes.checkboxWrapper} onClick={handleClick}>
            <Checkbox
              classNames={{ input: classes.checkbox }}
              color={checked ? "lime.6" : "gray"}
              checked={checked}
              readOnly
            />
          </Box>
        </Stack>

        <Divider color="gray.2" size="sm" orientation="vertical" />

        {/* I think its better if we can click on the whole thing to see its details, rather than clicking on the leetle tinie chevron..
          But keeping the checkbox's behaviour to mark an item as completed. */}
        <Group className={classes.sectionWrapper} onClick={() => navigate(`/todos/${todoItem.id}`)}>
          <Stack className={classes.middleSection}>
            <Text td={checked ? "line-through" : undefined}>{todoItem.title}</Text>
          </Stack>

          <Stack className={classes.rightSection}>
            <ActionIcon color="black" size="sm" variant="transparent">
              <IconChevronRight />
            </ActionIcon>
          </Stack>
        </Group>
      </Group>
    </Paper>
  );
}
