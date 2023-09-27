import { Stack } from "@mantine/core";

import { TodoDetails } from "@/components/TodoDetails";

export function Todo() {
  return (
    <Stack mih="100vh" justify="center" align="center">
      <TodoDetails />
    </Stack>
  );
}
