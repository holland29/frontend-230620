import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Array from './views/Array/Execute';

function App() {
  return (
    <>
    <Routes>
      <Route path='/array' element={<Array />}/>
    </Routes>
    </>
  );
}

export default App;
