import { ReactNode } from "react";

import { Container, Space, Stack, Text, Title } from "@mantine/core";

type TAppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: TAppLayoutProps) {
  return (
    <Container size="md" pt="xl">
      <Stack gap="0.25em">
        <Title c="gray.8" order={2}>
          My Tasks
        </Title>
        <Text c="dimmed">Saturday 23th of September 2023</Text>
      </Stack>

      <Space h="xl" />

      <Stack>{children}</Stack>
    </Container>
  );
}
