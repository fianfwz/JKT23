import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Fun Football JKT23 FC</span>. All Rights Reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            WhatsApp
          </a>
          <a href="https://instagram.com/jkt23fc" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            Instagram
          </a>
          <a href="mailto:info@jkt23fc.com" className="hover:text-blue-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
