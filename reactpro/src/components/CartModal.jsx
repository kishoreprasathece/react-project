// CartModal.jsx
import React from 'react';

const CartModal = ({ cartItems, onRemove, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <h2 className="text-lg font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center my-2">
                <span>{item.title}</span>
                <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white p-1 rounded">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={onClose} className="mt-4 bg-gray-300 p-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default CartModal;
