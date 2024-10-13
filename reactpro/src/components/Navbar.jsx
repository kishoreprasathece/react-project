// Navbar.jsx
import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg">ALPHA LIFE STYLE</h1>
      <button className="relative" onClick={onCartClick}>
        <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartCount}</span>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
