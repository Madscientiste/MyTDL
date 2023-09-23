import { Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";

import { NotFound } from "../NotFound";
import { TodoCard } from "../TodoCard";
import { fakeTodoItems } from "../TodoList/fake";

// import classes from "./TodoDetails.module.css";

export function TodoDetails() {
  const { id } = useParams();

  const exists = useMemo(() => {
    return fakeTodoItems.find((v) => v.id == id);
  }, [id]);

  if (!exists) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <TodoCard todoItem={exists} />
    </Fragment>
  );
}
