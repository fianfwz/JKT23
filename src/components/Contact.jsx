import React from "react";
import { FaWhatsapp, FaInstagram, } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 text-white bg-gradient-to-b from-black/90 via-indigo-900/80 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          📬 Kontak <span className="text-blue-400">Kami</span>
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {/* WhatsApp */}
          <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <FaWhatsapp className="text-blue-400 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-200">0812-1094-0483</p>
          </div>

          {/* Instagram */}
          <div className="bg-white/10 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <FaInstagram className="text-blue-400 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2"> Instagram</h3>
            <p className="text-gray-200">@jkt23.fc</p>
          </div>
        </div>
      </div>
    </section>
  );
}
