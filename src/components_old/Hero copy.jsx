import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/minisoccer.jpg')",
        }}
      ></div>

      {/* Layer blur & overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50"></div>

      {/* Konten utama */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Fun Football{" "}
          <span className="relative inline-block px-4 py-1">
            {/* Rectangle */}
            <span className="absolute inset-0 bg-indigo-900 rounded-2xl shadow-md translate-y-1"></span>
            {/* Teks putih */}
            <span className="relative text-white">JKT23 FC</span>
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Bermain sepakbola & mini soccer bersama, penuh keseruan dan persahabatan.
        </p>

        <a
          href="https://wa.me/6281210940483?text=Halo%20saya%20mau%20gabung%20Fun%20Football%20JKT23%20FC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-800 
             text-white text-lg font-medium tracking-wide rounded-full shadow-lg 
             hover:scale-105 hover:shadow-xl active:scale-95 
             transition-all duration-300 ease-in-out"
        >
          Gabung Sekarang
        </a>
      </div>
    </section>
  );
}
