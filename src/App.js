// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import './index.css'; // Make sure to import your styles

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default App;
