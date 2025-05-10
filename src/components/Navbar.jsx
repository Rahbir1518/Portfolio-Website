import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="div1 bg-[#B98C73] col-span-4 md:col-span-2 sm:col-span-1 flex items-center justify-between rounded-2xl p-3 relative">
      <img src={logo} className="w-auto h-[60px]" alt="Logo" />
      <div className="hidden xl:flex gap-3">
        <Link
          to="/"
          className="text-black font-bold hover:text-greenYellow/60 cursor-none font-secondary pr-3"
        >
          Home
        </Link>
        <Link
          to="/experience"
          className="text-black font-bold hover:text-greenYellow/60 cursor-none font-secondary pr-3"
        >
          Experience
        </Link>
      </div>

      {!menuOpen && (
        <button
          className="xl:hidden bg-brownee/60 px-4 py-2 rounded-md font-bold ml-4 z-[101] hover:bg-brownee/40 hover:cursor-none"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      )}

      <div
        className={`text-white fixed top-0 right-0 w-2/3 sm:w-1/2 h-screen bg-brownee shadow-lg flex flex-col items-start px-6 py-8 space-y-4 z-[9999] transform transition-transform duration-500 ${
         menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
       style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <button
          className="self-end text-2xl mb-4 cursor-none hover:cursor-none hover:text-gray-400"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="font-bold font-secondary text-lg hover:underline cursor-none hover:cursor-none"
        >
          Home
        </Link>
        <Link
          to="/experience"
          onClick={() => setMenuOpen(false)}
          className="font-bold font-secondary text-lg hover:underline cursor-none hover:cursor-none"
        >
          Experience
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
