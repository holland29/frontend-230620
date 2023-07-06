import React from 'react'

// props의 경우 읽기 전용(read-only): 'immutable'(변할 수 없다.)
// 컴포넌트가 받을 props의 타입을 정의
type Props = {
    name: string
}

// props를 사용하는 자식 컴포넌트를 정의
const Welcome: React.FC<Props> = (props: Props) => {
    return <h1>Hello, {props.name}</h1>;
}

// 부모 컴포넌트에서 자식 컴포넌트를 사용하고, props를 통해 데이터를 전달
const prop02: React.FC<Props> = (props: Props) => {
  return <Welcome name='Seungah' />;
}

export default prop02