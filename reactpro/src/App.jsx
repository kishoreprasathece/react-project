// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './components/Content';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
       
      </Routes>
    </Router>
  );
};

export default App;
