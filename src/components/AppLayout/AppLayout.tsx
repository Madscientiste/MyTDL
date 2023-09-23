import { ReactNode } from "react";

import { Container, Stack } from "@mantine/core";

type TAppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: TAppLayoutProps) {
  return (
    <Container size="md" pt="xl">
      <Stack>{children}</Stack>
    </Container>
  );
}
