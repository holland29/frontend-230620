import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Array from './views/Array/Execute';
import Greeting from './views/Greeting/Greeting';
import Counter from './views/Counter';
import MyForm from './views/MyForm';
import ReducerSample from './views/ReducerSample';

function App() {
  const onClick = () => {
    console.log("클릭 동작 실행 성공");
  }

  const onSubmit = (form: { name: string, description: string}) => {
    console.log(form);
  }
  return (
    <>
    <Routes>
      <Route path='/array' element={<Array />}/>
      <Route path='/greeting' element={<Greeting name='Seungah' onClick={onClick} />}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/form' element={<MyForm onSubmit={onSubmit} />}/>
      <Route path='/reducerSample' element={<ReducerSample />}/>
    </Routes>
    </>
  );
}

export default App;
