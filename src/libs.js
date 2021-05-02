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
      .then((registrations ) => {
        console.log("SW registered: ", registrations)
        for (let registration of registrations) {
          console.log("SW registered - force update: ", registrations)
          registration.update();
        }
      })
      .catch((registrationError ) => console.log("SW registration failed: ", registrationError));
  });
}