import React from 'react'

interface HelloProps {
    color: string;
    name?: string;
}

// props는 객체 형태로 전달
// props라는 이름의 매개변수를 전달
// props의 해당 속성을 지정,
// 각 속성값을 조회할 때: props.속성명

// defaultProps 기본값 설정
// 매개변수 입력란에 매개변수명 = 기본값
const Hello: React.FC<HelloProps> = ({color, name = '이름없음'}) => {

  return (
    <>
        <div style={{color}}>{name}, 매개변수로 color값 지정</div>
    </>
  );
}

export default Hello