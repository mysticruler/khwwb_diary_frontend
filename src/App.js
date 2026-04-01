import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      












        <Route path="/testing" element={<Testing />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
