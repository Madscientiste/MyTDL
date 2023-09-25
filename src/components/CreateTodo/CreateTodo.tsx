import { Button, TextInput } from "@mantine/core";

import classes from "./CreateTodo.module.css";

export function CreateTodo() {
  // const todo = useCreateTodo();

  return (
    <div className={classes.controls}>
      <TextInput
        placeholder="Bake cookies using firefox"
        classNames={{ input: classes.input, root: classes.inputWrapper }}
      />

      <Button className={classes.control} >Add</Button>
    </div>
  );
}
