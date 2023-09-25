import { notifications as _notifications } from "@mantine/notifications";
import { IconBug } from "@tabler/icons-react";

export const notifications = {
  error: ({ title, message }: { title?: string; message: string }) => {
    _notifications.show({
      p: "md",
      color: "red.4",
      icon: <IconBug />,
      title: title || "Unexpected Error",
      message: message,
    });
  },
};
