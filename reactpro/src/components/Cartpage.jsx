import React, { useReducer, useEffect, useState } from 'react';

const CartPage = ({ cartItems, onRemove }) => {
  // Reducer for managing item quantity
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

  // Function to calculate total cart value
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const itemQty = item.qty || 1;
      total += itemQty * item.price;
    });
    setTotalValue(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => {
            const [state, dispatch] = useReducer(reducer, initialQtyState);

            if (state.qty === 0) {
              onRemove(item.id);
            }

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
                      calculateTotal();
                    }}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    +
                  </button>
                  <p>qty: {state.qty}</p>
                  <button
                    onClick={() => {
                      dispatch({ type: 'DECREMENT' });
                      calculateTotal();
                    }}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => {
                    onRemove(item.id);
                    calculateTotal();
                  }}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Remove
                </button>
                <p>Total: ${(state.qty * item.price).toFixed(2)}</p>
              </li>
            );
          })}
        </ul>
      )}
      <p className="text-lg font-bold">Cart Total: ${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default CartPage;
