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
      .register("/sw.js")
      .then((registration) => {
        console.log("Service worker here!");
        registration.update();
      })
      // .then((registration ) => console.log("SW registered: ", registration))
      .catch((registrationError) => console.log("SW registration failed: ", registrationError));
  });
}