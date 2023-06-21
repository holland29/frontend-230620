"use strict";
//! 기본 데이터 타입
//? number : 모든 숫자를 나타내는 타입
// 실수, 정수, 특수 값(NaN, Infinity) 등
let decimal = 6;
let hex = 0xf00d;
let notANumber = NaN;
let infintiy = Infinity;
//? string : 텍스트 데이터를 나타내는 문자열 타입
// "", '', `(백틱 : 템플릿 문자열) 사용 가능
let $color = "green";
color: 'red';
let fullName = `Lee Seung Ah`;
let _age = 99;
let sentence = `Hello, my name is ${fullName}. I'm ${_age + 1}years old.`;
console.log(sentence);
// Hello, my name is Lee Seung Ah. I'm 100years old.
//? boolean
// 논리적인 참/거짓을 나타내는 타입
let isDone = false;
isDone = true;
//? null & undefined
// 자바스크립트에서는 null과 undefined가 각각의 자체적인 타입을 가짐
// 타입스크립트에서는 null과 undefined를 void 또는 다른 모든 타입의 하위 타입으로 간주
// >> 다른 타입의 값으로 사용할 수 있다.
let n = null;
let u = undefined;
//? symbol
// ES6에서 처음 도입된 타입
// 변경 불가능, 유일한 값을 나타냅니다.
// 객체속성의 키로 사용될 때 유용합니다.
let sym1 = Symbol();
let sym2 = Symbol("key"); // string key인지 (옵션으로 사용)
