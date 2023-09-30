import { Alert, Button, Group, Modal, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle, IconBug } from "@tabler/icons-react";
import { AxiosError } from "axios";

type TFallbackProps = {
  error: AxiosError | Error;
  resetErrorBoundary: (...args: any[]) => void;
};

export function Fallback({ error, resetErrorBoundary }: TFallbackProps) {
  const isAxiosError = error instanceof AxiosError;

  const title = isAxiosError ? error.response?.statusText : error.name;
  const body = error.message;

  return (
    <Modal.Root onClose={resetErrorBoundary} opened centered>
      <Modal.Overlay />

      <Modal.Content>
        <Modal.Body>
          <Stack>
            <Group justify="center">
              <ThemeIcon size="xl" variant="transparent" color="red">
                <IconAlertTriangle style={{ width: "100%", height: "100%" }} />
              </ThemeIcon>
            </Group>

            <Alert variant="filled" color="red" title={title} icon={<IconBug />}>
              Unable to reach the server, make sure everything is configured proprely !
            </Alert>

            <Paper p="md" withBorder>
              <Text c="gray.7" size="sm">
                {body}
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
