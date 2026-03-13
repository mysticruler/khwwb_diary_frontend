import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import GoverningBody from "./governingBody";
import Whoiswho from "./Whoiswho";
import Officelist from "./Officelist";
import Schemes from "./schemes";
import Testing from "./testing";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/governing-body" element={<GoverningBody />} />
        <Route path="/whoiswho" element={<Whoiswho />} />
        <Route path="/officelist" element={<Officelist />} />
        <Route path="/schemes/:type" element={<Schemes />} />












        <Route path="/testing" element={<Testing />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
