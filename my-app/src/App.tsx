import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Components from './components';
import Prop from './props/prop02';
import State from './state';
import Effect from './effect';
import Hello from './props/hello';
import Todo from './views/Practice';
import Wrapper from './props/Wrapper';
import Input from './views/Input';
import ArrayRender from './views/ArrayRendering/application';

function App() {
  return (
    <>
    <State name='SeungAh'/>
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
        <Wrapper>
          <Route path='hello' element={<Hello color='red'/>}/>
        </Wrapper>
        <Route path='/' element={<Components />}/>
        <Route path='hello' element={<Hello color='blue' name='Seugnah'/>}/>
        <Route path='/props' element={<Prop name='Seungah'/>}/>
        <Route path='/input' element={<Input />}/>
        <Route path='/arrayRendering' element={<ArrayRender />}/>
      </Routes>
    </>
  );
}

export default App;