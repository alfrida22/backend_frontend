import React from "react";
import ReactDOM from "react-dom/client"; // Import React dan ReactDOM
import "./index.css"; // Impor file CSS
import App from "./App"; // Impor komponen utama App
import reportWebVitals from "./reportWebVitals"; // Impor fungsi untuk melaporkan data kinerja
import { BrowserRouter } from "react-router-dom"; // Impor komponen BrowserRouter dari react-router-dom
// import DataProvider from "./context/DataProvider"; // Impor DataProvider (mungkin digunakan untuk manajemen keadaan)
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // Impor pendaftaran service worker

// Membuat elemen root untuk merender aplikasi
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DataProvider> */}
      <App />
      {/* </DataProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// Mendaftarkan service worker untuk caching dan PWA
serviceWorkerRegistration.register();

// Jika Anda ingin mengukur kinerja aplikasi, Anda dapat mengirim data ke endpoint analitik atau melihatnya di konsol.
// reportWebVitals(console.log);

