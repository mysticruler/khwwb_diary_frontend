import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Admin from './Admin';
import AdminLogin from './AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* 🔐 LOGIN PAGE */}
        <Route path="/milanistheadmin" element={<AdminLogin />} />

        {/* 🔐 PROTECTED ADMIN */}
        <Route path="/milanistheadmin/dashboard" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;