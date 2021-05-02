// =======
// Scripts
// =======
// libs
import createId from './scripts/libs/createId.js';
import convertBytes from './scripts/libs/convertBytes.js';

// Service Worker
if ("serviceWorker" in navigator) {
  // * console.log("SW is supported");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      // .register("/sw.js")
      .getRegistrations()
      .then((registrations) => {
        console.log("SW registered: ", registrations)
        Promise.all(registrations.map((r) => r.unregister()))
      })
      .then(() => window.location.reload())
      .catch((registrationError) => console.log("SW registration failed: ", registrationError));
  });
}