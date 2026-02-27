import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import GoverningBody from "./governingBody";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/governing-body" element={<GoverningBody />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
