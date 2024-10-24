
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, { ...item, qty: 1 }]); // Add quantity to the item
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={removeFromCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
