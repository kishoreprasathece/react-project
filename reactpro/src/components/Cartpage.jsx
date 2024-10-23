import React, { useReducer, useState, useEffect } from 'react';

const Cartpage = ({ cartItems, onRemove, onClose }) => {

  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { qty: state.qty + 1 };
      case 'DECREMENT':
        return { qty: state.qty > 1 ? state.qty - 1 : 0 };
      default:
        return state;
    }
  }

  const initialQtyState = { qty: 1 }; 
  
  const [totalValue, setTotalValue] = useState(0);

  
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemQty = item.qty || 1; 
      total += itemQty * item.price; // Multiply quantity by price
    });
    setTotalValue(total); // Update the total value state
  };

  
  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-400">
        <h2 className="text-lg font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => {
              const [state, dispatch] = useReducer(reducer, initialQtyState); // UseReducer for each cart item

              // Automatically remove item if qty reaches 0
              if (state.qty === 0) {
                onRemove(item.id);
              }

              // Calculate the item total based on quantity
              const itemTotal = state.qty * item.price;

              // Update the item’s quantity in cartItems
              item.qty = state.qty;

              return (
                <li key={item.id} className="flex justify-between items-center my-2">
                  <span>{item.title}</span>
                  <img src={item.image} alt={item.title} width="120" />
                  <p className="text-xl my-2">Price: ${item.price}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        dispatch({ type: 'INCREMENT' });
                        calculateTotal(); // Recalculate total after increment
                      }}
                      className="bg-green-500 text-white p-1 rounded"
                    >
                      +
                    </button>
                    <p>qty: {state.qty}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: 'DECREMENT' });
                        calculateTotal(); // Recalculate total after decrement
                      }}
                      className="bg-red-500 text-white p-1 rounded"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      onRemove(item.id);
                      calculateTotal(); // Recalculate total after removal
                    }}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Remove
                  </button>
                  <p>Total: ${itemTotal.toFixed(2)}</p>
                </li>
              );
            })}
          </ul>
        )}
        <p className="text-lg font-bold">Cart Total: ${totalValue.toFixed(2)}</p>
        <button onClick={onClose} className="mt-4 bg-gray-300 p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
