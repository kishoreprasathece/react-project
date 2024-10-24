import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-xl font-bold">ECOM</h1>
      <button className="text-xl font-bold" onClick={() => navigate('/')}>
        HOME
      </button>
      <button className="relative" onClick={() => navigate('/cart')}>
        <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {cartCount}
        </span>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
