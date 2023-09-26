import { FallbackProps } from "react-error-boundary";

import { Alert, Button, Group, Modal, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle, IconBug } from "@tabler/icons-react";
import { AxiosError } from "axios";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const shouldOpen = error instanceof AxiosError;

  return (
    <Modal.Root onClose={resetErrorBoundary} opened={shouldOpen} centered>
      <Modal.Overlay />

      <Modal.Content>
        <Modal.Body>
          <Stack>
            <Group justify="center">
              <ThemeIcon size="xl" variant="transparent" color="red">
                <IconAlertTriangle style={{ width: "100%", height: "100%" }} />
              </ThemeIcon>
            </Group>

            <Alert variant="filled" color="red" title={error.response.statusText} icon={<IconBug />}>
              Unable to reach the server, make sure everything is configured proprely !
            </Alert>

            <Paper p="md" withBorder>
              <Text c="gray.7" size="sm">
                {error.message}
              </Text>
            </Paper>

            <Button onClick={resetErrorBoundary} variant="light">
              Retry
            </Button>
          </Stack>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
