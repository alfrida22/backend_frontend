/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// Import modul Workbox yang diperlukan
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Deklarasi konstanta self yang merujuk pada ServiceWorkerGlobalScope
declare const self: ServiceWorkerGlobalScope;

// Mengaktifkan clients claim agar service worker dapat mengendalikan klien saat menginstal
clientsClaim();

// Precache semua aset yang dihasilkan oleh proses build dan atur routing untuknya
precacheAndRoute(self.__WB_MANIFEST);

// Konfigurasi routing App Shell untuk mengembalikan index.html untuk semua permintaan navigasi
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    // Jika ini bukan permintaan navigasi, lewati.
    if (request.mode !== "navigate") {
      return false;
    }

    // Jika ini adalah URL yang dimulai dengan /_, lewati.
    if (url.pathname.startsWith("/_")) {
      return false;
    }

    // Jika ini tampak seperti URL untuk sumber daya karena mengandung
    // ekstensi file, lewati.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Kembalikan true untuk menandakan bahwa kita ingin menggunakan handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// Contoh routing caching saat runtime untuk permintaan yang tidak ditangani oleh precache
registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"),
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Pastikan bahwa begitu cache runtime ini mencapai ukuran maksimum
      // gambar yang paling tidak sering digunakan dihapus.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Ini memungkinkan aplikasi web untuk memicu skipWaiting melalui
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Logika service worker khusus lainnya dapat ditempatkan di sini.
