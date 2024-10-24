import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between p-8 bg-cyan-200 text-white">
      <h1 className="text-xl text-black font-bold">ECOM</h1>
      <button className="text-xl text-black font-bold" onClick={() => navigate('/')}>
        HOME
      </button>

      <div className="relative">
        <img 
          className="w-10 h-10 cursor-pointer"
          onClick={() => navigate('/cart')}
          src='image/cartt.png' 
          alt="Cart"
        />
        <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {cartCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
