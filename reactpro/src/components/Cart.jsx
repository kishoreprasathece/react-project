
import React, { useEffect, useState } from 'react';

const Cart = ({ cartItems, onRemove }) => {
  const [cart, setCart] = useState(cartItems);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.qty * item.price; 
    });

    const discount = total * 0.1;
    const discounted = total - discount;

    return { total, discounted };
  };

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const { total, discounted } = calculateTotal();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={item.id} className="flex justify-between items-center p-4 bg-teal-200 shadow-md rounded-lg hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1 mx-4">
                <h3 className="text-lg font-semibold text-violet-400">{item.title}</h3>
                <p className="text-xl text-gray-800">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => {
                      const newCart = [...cart];
                      newCart[index].qty += 1;
                      setCart(newCart);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded transition"
                  >
                    +
                  </button>
                  <p className="font-semibold">Qty: {item.qty}</p>
                  <button
                    onClick={() => {
                      if (item.qty > 1) {
                        const newCart = [...cart];
                        newCart[index].qty -= 1;
                        setCart(newCart);
                      }
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded transition"
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  onRemove(item.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded transition"
              >
                Remove
              </button>
              <p className="text-lg font-bold ml-4">Total: ${(item.qty * item.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-6 gap-4">
          <p className="text-xl ml-96 text-red-400 font-bold">Cart Total: ${total.toFixed(2)}</p>
          <p className="text-xl ml-80 text-red-400  font-bold">Discounted Total (10% off): ${discounted.toFixed(2)}</p>
        </div>
       
      )}
       <button   className="bg-green-600 ml-96  text-white font-semibold py-1 px-2 rounded transition"  >buy now</button>
    </div>
  );
};

export default Cart;
