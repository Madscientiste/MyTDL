import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { AppProviders } from "@/providers";
import "@/theme/styles.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

export default function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </StrictMode>,
  );
}
