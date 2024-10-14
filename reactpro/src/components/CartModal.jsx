// CartModal.jsx
import React from 'react';

const CartModal = ({ cartItems, onRemove, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-400">
        <h2 className="text-lg font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center my-2">
                <span>{item.title}</span>
                <img src={item.image} alt={item.title} width="120" />
                <p className='text-xl my-2'>Price: ${item.price}</p>
                <button className="bg-black text-white p-1 rounded">qty+1</button>
               
                <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white p-1 rounded">
                  Remove
                </button>
               <p>total : ${}</p>
               </li>
            ))}
          </ul>
        )}
        <button onClick={onClose} className="mt-4 bg-gray-300 p-2 rounded">Close</button>
        <button onClick={onClose} className="mt-4 bg-orange-400 p-2 mx-40 rounded">buy now</button>
      </div>
    </div>
  );
};

export default CartModal;
