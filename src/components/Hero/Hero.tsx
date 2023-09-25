import { Container, Text, Title } from "@mantine/core";

import { CreateTodo } from "../CreateTodo";
import { Dots } from "./Dots";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Not so fancy{" "}
          <Text component="span" className={classes.highlight} inherit>
            To-Do List
          </Text>{" "}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Supercharge your productivity with your TODO Companion. It even reminds you to stop procrastinating on
            Twitter!
          </Text>
        </Container>

        <CreateTodo />
      </div>
    </Container>
  );
}
