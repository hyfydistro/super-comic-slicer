import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

console.log("⚙ Hello from Service Worker");

precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(
//   // ({url}) => url.origin === "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
//   new RegExp("^https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),
//   new NetworkFirst({
//     cacheName: "font-awesome-stylesheet",
//     plugins: [
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       })
//     ]
//   })
// );

// registerRoute(
//   new RegExp("https://fonts.googleapis.com"),
//   new StaleWhileRevalidate({
//     cacheName: "google-fonts-stylesheets",
//   })
// );

// registerRoute(
//   ({url}) => url.origin === "https://fonts.gstatic.com",
//   new CacheFirst({
//     cacheName: "google-fonts-webfonts",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//     ]
//   })
// );

registerRoute(
  ({url}) => url.origin === self.location.origin &&
             url.pathname.startsWith('./src/fonts/'),
  new CacheFirst({
    cacheName: "static-fonts"
  })
);

registerRoute(
  ({url}) => url.origin === self.location.origin &&
             url.pathname.startsWith('./src/images/'),
  new CacheFirst({
    cacheName: "static-images"
  })
);

registerRoute(
  ({request}) => request.destination === 'script' ||
                  request.destination === 'style' ||
                  request.destination === 'document',
  new CacheFirst({
    cacheName: 'static-assets',
  })
);

// * Use (uncomment) with care
// workbox.skipWaiting();