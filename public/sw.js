import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// TODO
// - cleanup unuse variables
// - target appropriate and specific assets to cache

console.log("⚙ Hello from Service Worker");

// This clientsClaim() should be at the top level
// of your service worker, not inside of, e.g.,
// an event handler.
clientsClaim();

// activate service worker without waiting for user to close tab or refresh application.
self.skipWaiting();

// Precache Route
// @description: save assets

// if (!manifest) return;
precacheAndRoute(self.__WB_MANIFEST);


const maxAgeSeconds = 30 * 24 * 60 * 60; // 30 days (1 * month)
const maxEntries = 60;


// Cache the underlying font files with a cache-first strategy for 1 year.
// const fontCacheName = "google-fonts-webfonts";

// registerRoute(
//   ({ url }) => url.origin === "https://fonts.gstatic.com",
//   new CacheFirst({
//     cacheName: fontCacheName,
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200]
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30
//       })
//     ]
//   }),
// );

// Cache Images
registerRoute(
  ({url}) => url.origin === self.location.origin &&
             url.pathname.startsWith('../public/assets/images/'),
  new CacheFirst({
    cacheName: "static-images"
  })
);


// Cache Styles and Scripts
registerRoute(
  ({request}) => request.destination === 'script' ||
                  request.destination === 'style' ||
                  request.destination === 'document',
  new CacheFirst({
    cacheName: 'static-assets',
  })
);
