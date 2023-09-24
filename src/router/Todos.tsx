import { AppLayout } from "@/components/AppLayout";
import { TodoList } from "@/components/TodoList";

export function Todos() {
  return (
    <AppLayout>
      <TodoList />
    </AppLayout>
  );
}
