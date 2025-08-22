import React from "react";
import { FaFutbol } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/minsocvideo.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video tag.
      </video>

      {/* Overlay biar teks tetap jelas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-indigo-900/80 to-black/90"></div>

      {/* Konten di tengah */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <div className="flex justify-center items-center gap-3 mb-6">
          <FaFutbol className="text-blue-400 text-5xl" />
          <h2 className="text-4xl font-extrabold">
            Tentang <span className="text-blue-400">Kami</span>
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          <strong>JKT23 FC</strong> adalah komunitas pecinta
          sepak bola & mini soccer santai yang berbasis di Jakarta.
          Pertandingan kami selalu penuh tawa, semangat, dan rasa kebersamaan.
        </p>
        <p className="text-lg leading-relaxed text-gray-200">
          Semua orang diterima — tanpa batas usia atau kemampuan. Tujuan
          kami sederhana:{" "}
          <em>bermain, bersenang-senang, dan sehat bersama</em>. Lapangan
          adalah rumah kedua kami, dan setiap pertandingan adalah cerita baru.
        </p>
      </div>
    </section>
  );
}
