import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homme from '../Homme/Homme';
import Femme from '../Femme/Femme';
import Enfant from '../Enfant/Enfant';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Shop</h1>
      <BrowserRouter>
        <nav className="navbar">
          <ul>
            <li  ><Link to="/Homme">Homme</Link></li>
            <li><Link to="/Femme">Femme</Link></li>
            <li><Link to="/Enfant">Enfant</Link></li>
            <li><Link to="/Enfant/Chaussures">Chaussures Enfant</Link></li>
            <li><Link to="/Enfant/Manteaux">Manteaux Enfant</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/Homme" element={<Homme />} />
        <Route path="/Femme" element={<Femme />} />
        <Route path="/Enfant" element={<Enfant />} />
        <Route path="/Enfant/:type" element={<Enfant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;