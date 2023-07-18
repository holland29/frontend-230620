import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Array from './views/Array/Execute';
import Components from "./components";
import Prop from "./props/prop02";
import State from "./state";
import Effect from "./effect";
import Hello from "./props/hello";
import Todo from "./views/Practice";
import Wrapper from "./props/Wrapper";
import Input from "./views/Input";
import ArrayRender from "./views/ArrayRendering/application";
import Greeting from './views/Greeting/Greeting';
import CustomHooks from './hooks/index'
import CustomHooksPractice from './hooks/Practice'

function App() {
  const onClick = () => {
    console.log("클릭 동작 실행 성공");
  }

  const onSubmit = (form: { name: string, description: string}) => {
    console.log(form);
  }
  return (
    <>
    <State name="SeungAh" />
    <Effect />
    <Todo />
    {/* 
  라우터 설치
  npm install react-router-dom
  
  라우트를 여러개 사용 시 Routes 안에 정의 해야 함. 
  path속성: URL경로
  element속성: 컴포넌트를 지정
  */}
    <Routes>
      <Route path="/" element={<Components />} />
      <Route
        path="hello"
        element={
          <Wrapper>
            <Hello color="red" />
          </Wrapper>
        }
      />
      <Route path="hello" element={<Hello color="blue" name="Seugnah" />} />
      <Route path="/props" element={<Prop name="Seungah" />} />
      <Route path="/input" element={<Input />} />
      <Route path="/arrayRendering" element={<ArrayRender />} />
      <Route path="/array" element={<Array />} />
      <Route path="/greeting" element={<Greeting name="Hello" onClick={onClick}/>} />
      <Route path="/customHooks" element={<CustomHooks/>} />
      <Route path="/customHooksPractice" element={<CustomHooksPractice/>} />
    </Routes>
  </>
  );
}

export default App;
