//! 기본 데이터 타입

//? 1. number : 모든 숫자를 나타내는 타입
// 실수, 정수, 특수 값(NaN, Infinity) 등

let decimal: number = 6;
let hex: number = 0xf00d;
let notANumber: number = NaN;
let infintiy: number = Infinity;

//? 2. string : 텍스트 데이터를 나타내는 문자열 타입
// "", '', `(백틱 : 템플릿 문자열) 사용 가능

let $color: string = "green";
$color = 'red';

let fullName: string = `Lee Seung Ah`;
let _age: number = 99;

let sentence: string = `Hello, my name is ${fullName}. I'm ${ _age + 1 }years old.`;
console.log(sentence);
// Hello, my name is Lee Seung Ah. I'm 100years old.
// 템플릿 문자열 사용 : 여러 줄에 걸친 텍스트와 표현식을 포함 가능
// 문자열 내에 변수 또는 표현식을 삽입할 수 있는 문자열
// 위의 예제에서 ${fullName}은 fullName 변수의 값을 문자열로 변환하여 문자열 안에 삽입

//? 3. boolean
// 논리적인 참/거짓을 나타내는 타입

let isDone: boolean = false;
isDone = true;

//? 4 & 5. null & undefined
// 자바스크립트에서는 null과 undefined가 각각의 자체적인 타입을 가짐
// 타입스크립트에서는 null과 undefined를 void 또는 다른 모든 타입의 하위 타입으로 간주
// >> 다른 타입의 값으로 사용할 수 있다.
// null과 undefined는 모든 다른 타입의 하위 타입이므로, null과 undefined는 number와 같은 타입에 할당할 수 있습니다.

// undefined의 경우 변수를 초기화 하지 않으면 해당 변수는 undefined의 값을 가지며 타입 또한 undefined로 추론됩니다.
let u2: undefined = undefined;
// u2 = 1;

// null의 경우 어떤 값이 의도적으로 비어있음을 표현합니다.
// typeof undefined 출력 시 undefined
// typeof null 출력 시 object

// undefined == null : true(참)
let n: null = null;
let u: undefined = undefined;

//? 6. any
// 자바스크립트와의 호환을 위해 any라는 이름의 타입을 제공합니다.
// 모든 타입의 값을 가질 수 있습니다. (모든 타입의 루트 타입, 최상위 타입)
let a: any = 0;
a = "hello";
a = true;
a = {};

//? 7. symbol
// ES6에서 처음 도입된 타입
// 변경 불가능, 유일한 값을 나타냅니다.
// 객체속성의 키로 사용될 때 유용합니다.

let sym1 = Symbol();
let sym2 = Symbol("key"); // string key인지 (옵션으로 사용)

//? bigint
// 0n, 2n, -3n ... 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
const theBiggestInt = BigInt(9007199254740992);