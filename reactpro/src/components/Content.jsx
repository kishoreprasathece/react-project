
// Content.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Cartpage from './Cartpage';
import Footer from './Footer';

const Content = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const addToCart = (item) => {
    if (cartItems.some(cartItem => cartItem.id === item.id)) {
      alert("Item already added to the cart");
      return; 
    }

    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id)); 
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={toggleModal} />

      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className='grid grid-cols-4 mx-2 bg-teal-100 p-8'>
          {data.map(item => (
            <li key={item.id}>
              <div>
                <h3 className='line-clamp-6  my-2 text-clip text-indigo-500'>{item.title}</h3>
                <img src={item.image} alt={item.title} width="120" />
                <p className='text-xl my-2'>Price: ${item.price}</p>
                <button className='bg-orange-400 p-2 rounded'>Buy now</button>
                <button
                  className='bg-yellow-200 p-2 my-3 gap-2 rounded'
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Footer />

      {isModalOpen && (
        <Cartpage
          cartItems={cartItems} 
          onRemove={removeFromCart} 
          onClose={toggleModal} 
        />
      )}
    </div>
  );
};

export default Content;
