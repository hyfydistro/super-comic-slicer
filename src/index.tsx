import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import App from "./App";

function init(): void {
  const appContainer = document.getElementById("root")
  if (!appContainer) return;

  const root = createRoot(appContainer);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

init();
