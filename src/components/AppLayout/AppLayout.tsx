import { ReactNode } from "react";

import { Container, Space, Stack } from "@mantine/core";

import { Hero } from "@/components/Hero";

type TAppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: TAppLayoutProps) {
  return (
    <Container size="md">
      <Hero />

      <Space h="xl" />

      <Stack justify="center">{children}</Stack>
    </Container>
  );
}
