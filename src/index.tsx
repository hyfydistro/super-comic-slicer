import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/app.scss";

import App from "./App";

import registerServiceWorker from "./libs/serviceWorkerRegistration";

function init(): void {
  const appContainer = document.getElementById("root")
  if (!appContainer) return;

  const root = createRoot(appContainer);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

init();

registerServiceWorker();
