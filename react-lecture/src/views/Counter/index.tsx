import React, { useReducer, useState } from 'react'

type Information = { 
    name: string, 
    description: string
};

type Action = { type: 'INCREASE'} | { type: 'DECREASE'};

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE' :
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {

  // useState를 사용한 상태관리
    // const [count, setCount] = useState<number>(0);
    // const onIncrease = () => setCount(count + 1);
    // const onDecrease = () => setCount(count - 1);

  // useReducer를 사용한 상태관리 
  const [count, dispatch] = useReducer(reducer, 0);
  // dispatch: 상태와 상태를 변경하는 함수
  // useReducer의 첫번째 매개변수는 reducer 함수
  // useReducer의 두번째 매개변수는 초기 상태
  const onIncrease = () => dispatch({type: 'INCREASE'});
  const onDecrease = () => dispatch({type: 'DECREASE'});

    const [info, setInfo] = useState<Information | null>(null);

  return (
    <>
        <h1>{count}</h1>
        <div>
            <button onClick={onIncrease}> + 1 </button>
            <button onClick={onDecrease}> - 1 </button>
        </div>
    </>
  )
}

export default Counter