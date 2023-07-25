import React from 'react'
import useCount from './stores/count';
import useContent from './stores/content';
import { Link } from 'react-router-dom';
import Index from './views'

//! Zustand 설치 : npm을 통해 설치
//? npm install zustand

//! Zustand 기능
// 2. 상태 선택
export default function Couter() {
    
    //? Counter 예제 
    // useStore 훅을 호출
    const count = useCount((state) => state.count);
    const increase = useCount((state) => state.increase);
    const increaseAsync = useCount((state) => state.increaseAsync);

    //? Content 예제
    // 구조 분해 할당을 통해 state, setState를 가져와서 사용
    const { selectContent, setSelectContent } = useContent();

    const handleClick = (value: number) => {
        console.log(`Selected value: ${value}`);
        setSelectContent(value);
    }

    return (
        <>
            <div>
                <button onClick={increase}>{count}</button>
                <button onClick={increaseAsync}>{count}</button>
            </div>
            <div>
                <h1>Selected Content : {selectContent}</h1>
                <button onClick={() => handleClick(1)}>Select 1</button>
                <button onClick={() => handleClick(2)}>Select 2</button>
                <button onClick={() => handleClick(3)}>Select 3</button>
            </div>
            <div>
                <Index />
                <button><Link to="/zustandCheck">아이디 확인</Link></button>
            </div>
        </>
    );
}

// 3. 비동기 작업

// type State = {
//     loading: boolean;
//     data: string | null;
//     fetch: () => Promise<void>;
// };

// const useStore = create<State>((set) => ({
//     loading: false,
//     data: null,
//     fetch: async () => {
//         set({ loading: true });
//         const response = await fetch('/api/data');
//         const data = await response.text();
//         set( { data, loading: false });
//     }
// }));