import { TextInput } from "@mantine/core";

import classes from "./ContainedInput.module.css";

export function ContainedInput() {
  return <TextInput classNames={classes} label="Title" placeholder="15329 Huston 21st" />;
}
