import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setData(response.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="container bg-teal-200 mx-auto py-6">
      {error ? (
        <p className="text-red-500 text-lg text-center">Error: {error}</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-2">
          {data.map(item => (
            <li key={item.id} className="bg-white shadow-md rounded-lg overflow-visible transition-transform transform hover:scale-105">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-600 my-2">{item.title}</h3>
                <img src={item.image} alt={item.title} className="w-48 h-48 object-center" />
                <p className="text-xl font-bold text-gray-800 my-2">Price: ${item.price}</p>
                <button
                  className="bg-yellow-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
