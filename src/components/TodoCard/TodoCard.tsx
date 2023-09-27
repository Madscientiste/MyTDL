import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ActionIcon, Box, Checkbox, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import { useUpdateTodo } from "@/api/updateTodo";
import { TTodoItem } from "@/type";

import classes from "./TodoCard.module.css";

type TTodoCardProps = Pick<TTodoItem, "id" | "title" | "completed">;

function _TodoCard({ id, title, completed: checked }: TTodoCardProps) {
  const mutation = useUpdateTodo();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    mutation.mutate({ id, data: { completed: !checked } });
  }, [checked]);

  const handleNavigate = useCallback(() => {
    navigate(`/todos/${id}`);
  }, [id]);

  return (
    <Paper data-checked={`${checked}`} className={classes.paper} withBorder>
      <Group gap={0} wrap="nowrap">
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

        <Divider size="sm" orientation="vertical" />

        {/* I think its better if we can click on the whole thing to see its details, rather than clicking on the leetle tinie chevron..
          But keeping the checkbox's behaviour to mark an item as completed. */}
        <Group className={classes.sectionWrapper} onClick={handleNavigate}>
          <Stack className={classes.middleSection}>
            <Text>{title}</Text>
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

// Realisticly, we are only updating the checked status when clicking, so ..
export const TodoCard = memo(_TodoCard);
