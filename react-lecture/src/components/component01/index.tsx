
// 컴포넌트

// interface ImageProps {
//     src: string;
//     alt: string;
// }

// function Image({ src, alt }: ImageProps) {

//     const myRef = useRef();

//     if (!myRef.current) {
//         myRef.current = {};
//     }


//     return (
//         <>
//             <div>안녕하세요 component01 컴포넌트 입니다.</div>
//             <img src={src} alt={alt} />
//         </>
//     );
// }

// function Profile() {
//     return (
//       <img
//         src="frontend-0620-lsa\react-lecture\src\assets\images"
//         alt="Katherine Johnson"
//       />
//     );
//   }
  
//   export default function Index() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }

// React의 구성 요소는 일반 JS함수이지만, 해당 이름은 대문자로 시작해야 합니다!
// function Index() {
//     // 구성요소가 2개 이상일 때 return문의 ()소괄호를 생략할 경우 그 다음 줄의 모든 코드는 return시 무시됨.
//   return (
//     <>
//         <Image src='./assets/images/puppy-g5505a0b67_1280.jpg' alt="강아지 사진"/>
//     </>
//   );
// }

// const Index2 = () => {
//     return <div>안녕하세요 component01 컴포넌트 입니다.</div>
//   }

import React from 'react'

interface Props {
    src: string;
    alt: string;
}

const Index: React.FC<Props> = ({src, alt}) => {
  return (
    <div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Index
