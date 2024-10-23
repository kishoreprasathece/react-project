import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">ECOMM</Link>
      <Link to="/cart" className="relative">
        <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {cartCount}
        </span>
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;

