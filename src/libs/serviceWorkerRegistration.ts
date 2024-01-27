import { Workbox } from "workbox-window";

const SW_VERSOIN = "1.0.0";

export default function registerServiceWorker() {
  console.log("registering service worker...", navigator);

  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    console.log("service worker available");

    const wb = new Workbox("/sw.js");

    wb.addEventListener("installed", event => {
      if (event.isUpdate) {
        // ! uncomment for testing purpose (development mode)
        if (confirm("New app update is available, Click Ok to refresh")) {
          // Reload and clear pre-existing cache
          window.location.reload();
        }
      }
    });

    wb.register()
      .then((response) => console.log("service worker registered: :", response))
      .catch((response) => console.warn("service worker failed: ", response));
  }
}
