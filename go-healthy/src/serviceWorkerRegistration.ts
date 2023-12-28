// Learn more about the benefits of this model and instructions on how to opt-in: https://cra.link/PWA

// Definisi isLocalhost untuk menentukan apakah aplikasi berjalan di localhost
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] adalah alamat IPv6 localhost.
      window.location.hostname === "[::1]" ||
      // 127.0.0.0/8 dianggap sebagai localhost untuk IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  // Tipe Config yang mendefinisikan callback yang akan digunakan saat service worker berhasil terdaftar atau diperbarui
  type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
  };
  
  // Fungsi register digunakan untuk mendaftarkan service worker jika memenuhi kondisi tertentu
  export function register(config?: Config) {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      // URL constructor tersedia di semua browser yang mendukung SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Service worker tidak akan berfungsi jika PUBLIC_URL berada di asal yang berbeda
        // dari halaman yang disajikan. Ini mungkin terjadi jika CDN digunakan untuk
        // menyajikan aset; lihat https://github.com/facebook/create-react-app/issues/2374
        return;
      }
  
      window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Aplikasi berjalan di localhost. Cek apakah service worker masih ada atau tidak.
          checkValidServiceWorker(swUrl, config);
  
          // Tambahkan logging tambahan untuk localhost, mengarahkan pengembang ke
          // dokumentasi service worker/PWA.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              "This web app is being served cache-first by a service " +
                "worker. To learn more, visit https://cra.link/PWA"
            );
          });
        } else {
          // Bukan localhost. Daftarkan service worker saja
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  // Fungsi registerValidSW digunakan untuk mendaftarkan service worker yang valid
  function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // Pada saat ini, konten precached yang diperbarui telah diambil,
                // tetapi service worker sebelumnya akan tetap melayani konten lama
                // sampai semua tab klien untuk halaman ini ditutup.
                console.log(
                  "New content is available and will be used when all " +
                    "tabs for this page are closed. See https://cra.link/PWA."
                );
  
                // Eksekusi callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // Pada saat ini, semua yang sudah diprecache.
                // Ini saat yang sempurna untuk menampilkan pesan
                // "Content is cached for offline use."
                console.log("Content is cached for offline use.");
  
                // Eksekusi callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error("Error during service worker registration:", error);
      });
  }
  
  // Fungsi checkValidServiceWorker digunakan untuk memeriksa apakah service worker yang valid dapat ditemukan
  function checkValidServiceWorker(swUrl: string, config?: Config) {
    // Periksa apakah service worker dapat ditemukan. Jika tidak, muat ulang halaman.
    fetch(swUrl, {
      headers: { "Service-Worker": "script" },
    })
      .then((response) => {
        // Pastikan service worker ada dan bahwa kita benar-benar mendapatkan file JS.
        const contentType = response.headers.get("content-type");
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf("javascript") === -1)
        ) {
          // Tidak ada service worker yang ditemukan. Kemungkinan aplikasi berbeda. Muat ulang halaman.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker ditemukan. Lanjutkan seperti biasa.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      });
  }
  
  // Fungsi unregister digunakan untuk mendaftarkan service worker
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  