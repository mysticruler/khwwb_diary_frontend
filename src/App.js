import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import ContactForm from './ContactForm';
import Game from './Game';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/game" element={<Game />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
