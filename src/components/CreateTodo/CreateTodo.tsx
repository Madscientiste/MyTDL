import { FormEvent, useState } from "react";

import { Button, Stack, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import { useCreateTodo } from "@/api/createTodo";

import classes from "./CreateTodo.module.css";

type TFormElements = HTMLFormElement & {
  readonly elements: HTMLFormControlsCollection & {
    title: HTMLInputElement;
    description: HTMLInputElement;
  };
};

export function CreateTodo() {
  const mutation = useCreateTodo();
  const [showDesc, setDesc] = useState(false);

  const handleSubmit = async (e: FormEvent<TFormElements>) => {
    e.preventDefault();

    const elements = e.currentTarget.elements;
    const title = elements.title.value;
    const description = elements.description.value;

    const vars = { data: { title, description } };
    await mutation.mutateAsync(vars, {
      onSuccess: () => {
        elements.title.value = "";
        elements.description.value = "";
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <Stack style={{ width: "100%" }} gap="xs">
          <TextInput
            name="title"
            placeholder="Title"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />

          {!showDesc && (
            <Button className={classes.button} leftSection={<IconPlus size={16} />} onClick={() => setDesc(true)}>
              Add description
            </Button>
          )}

          {showDesc && (
            <TextInput name="description" placeholder="Description" classNames={{ root: classes.inputWrapper }} />
          )}
        </Stack>

        <Button type="submit" className={classes.control} loading={mutation.isLoading}>
          Add
        </Button>
      </div>
    </form>
  );
}
