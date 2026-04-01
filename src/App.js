import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Admin from './Admin';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/milanistheadmin" element={<Admin />} />
      










      </Routes>
    </BrowserRouter>
  );
}

export default App;
