import React from "react";

export default function Gallery() {
  const driveLink =
    "https://drive.google.com/drive/folders/1MbgM2mbAsZYlwz-SgSKUvFCaIrOWOAcL?usp=sharing";

  return (
    <section
      id="gallery"
      className="relative py-20 min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('public/images/minsoc1.jpg')" }}
    >
      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          📸 Foto dan Video Kerenmu
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow">
          Klik tombol di bawah untuk melihat semua foto dan album di Google Drive saya.
        </p>
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-800 
             text-white text-lg font-medium tracking-wide rounded-full shadow-lg 
             hover:scale-105 hover:shadow-xl active:scale-95 
             transition-all duration-300 ease-in-out"
        >
          📂 Lihat Disini
        </a>
      </div>
    </section>
  );
}
