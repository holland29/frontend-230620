// 타입

import { type } from "os";

//! union 타입
let variable: number | string; 
variable = 5;
variable = "hello"; // 0622폴더 참조

//! intersaction 타입
// 여러 타입을 결합하여 하나의 타입을 만드는 방법
// &연산자를 사용하여 타입을 결합
// 여러 타입의 모든 멤버를 가질 수 있을 명시

type First = { a: number; b: string; };
type Second = { b: number; c: string; };

let variable2: First | Second;
variable2 = { a: 1, b: 1, c: "hello"}; 

type First2 = {
    a: number; b: string
};
type Second2 = {
    c: string
};

type FirstSecond = First2 & Second2;
    
let variable3: FirstSecond;
variable2 = { a: 1, b: "1", c: "hello" }; 

//! 타입 가드
// 특정 타입임을 검증하는데 사용되는 표현식
// 주로 typeof, instanceof 키워드 사용
function doSomething(value: string | number) {
    if (typeof value === "string") {
        // value : string
        console.log(value.toUpperCase());
    } else {
      // value : number
        console.log(value.toFixed(2));
    }
}

//! 타입 단언
let someValue: unknown = "this. is a string";
let strLength: number = (someValue as string).length;
