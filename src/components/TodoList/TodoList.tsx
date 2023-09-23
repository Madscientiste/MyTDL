import { Grid } from "@mantine/core";

import { TodoCard } from "../TodoCard";
import { fakeTodoItems } from "./fake";

export function TodoList() {
  return (
    <Grid columns={1}>
      {fakeTodoItems.map((todo) => {
        return (
          <Grid.Col key={todo.id} span={1}>
            <TodoCard todoItem={todo} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
