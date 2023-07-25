import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

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
import ContextApi from './contextAPI'
import ContextApiLogIn from './contextAPI/Practice'
import StyledComponents from './styledComponents'
import StyledComponents2 from './styledComponents/practice'
import FetchAPI from './restAPI/PostListFetch'
import AxiosAPI from './restAPI/PostListAxios'
import AsyncAPI from './restAPI/PostListAsync'
import Zustand from './zustand/index'
import ZustandId from './zustand/views'
import ZustandCheck from './zustand/views/check'

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
      <Route path="/contextApi" element={ <ContextApi/>} />
      <Route path="/contextApiLogIn" element={ <ContextApiLogIn/>} />
      <Route path="/styledComponents" element={ <StyledComponents/>} />
      <Route path="/styledComponents2" element={ <StyledComponents2/>} />
      <Route path="/fetchAPI" element={ <FetchAPI/>} />
      <Route path="/axiosAPI" element={ <AxiosAPI/>} />
      <Route path="/asyncAPI" element={ <AsyncAPI/>} />
      <Route path="/zustand" element={ <Zustand/>} />
      <Route path="/zustandId" element={ <ZustandId/>} />
      <Route path="/zustandCheck" element={ <ZustandCheck/>} />
    </Routes>
  </>
  );
}

export default App;
