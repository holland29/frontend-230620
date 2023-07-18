import { type } from 'os'
import React from 'react'

// 인터페이스 | type
type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미
};

// 화살표 함수
// 매개변수 설정
const Greeting = ({ name, mark, optional, onClick }: GreetingProps) => {
    const handleClick = (e: any) => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greeting.defaultProps = {
    mark: '!'
};

export default Greeting

// Hello, Seungah