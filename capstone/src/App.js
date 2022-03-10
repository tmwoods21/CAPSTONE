import { useState, useEffect } from 'react';
import { BrowserRouter as Route, Link, Routes } from 'react-router-dom';

import './App.css';
import './components/navbar'
import Navbar from './components/navbar';


function App() {
  
  return (
  
      <div className="App">
        <Navbar />
        <h2>Welcome to No Name!</h2>

        <Routes>

        </Routes>
      </div>
  
  );
}

export default App;
