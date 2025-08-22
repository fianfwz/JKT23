import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0a1f44] to-[#1a3b6d] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo + Tulisan */}
        <a href="#hero" className="flex items-center gap-2 hover:opacity-90 transition">
          <img
            src="/images/jkt23.jpg"
            alt="JKT23 Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
          />
          <h1 className="text-xl font-bold tracking-wide">JKT23 FC</h1>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {["Schedule", "Gallery", "Contact", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Button Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1f44] border-t border-white/20">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {["About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
