import { FormEvent } from "react";

import { Button, TextInput } from "@mantine/core";

import { useCreateTodo } from "@/api/createTodo";

import classes from "./CreateTodo.module.css";

type TFormElements = HTMLFormElement & {
  readonly elements: HTMLFormControlsCollection & {
    title: HTMLInputElement;
  };
};

export function CreateTodo() {
  const mutation = useCreateTodo();

  const handleSubmit = async (e: FormEvent<TFormElements>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const title = elements.title.value;

    await mutation.mutateAsync({ data: { title } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <TextInput
          name="title"
          placeholder="Bake cookies using firefox"
          classNames={{ input: classes.input, root: classes.inputWrapper }}
        />

        <Button type="submit" className={classes.control} loading={mutation.isLoading}>
          Add
        </Button>
      </div>
    </form>
  );
}
