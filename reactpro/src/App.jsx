import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    if (cartItems.some(cartItem => cartItem.id === item.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        {/* Product page route */}
        <Route
          path="/"
          element={<ProductPage addToCart={addToCart} />}
        />
        {/* Cart page route */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemove={removeFromCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
