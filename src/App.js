import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import GoverningBody from "./governingBody";
import Whoiswho from "./Whoiswho";
import Officelist from "./Officelist";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/governing-body" element={<GoverningBody />} />
        <Route path="/whoiswho" element={<Whoiswho />} />
        <Route path="/officelist" element={<Officelist />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
