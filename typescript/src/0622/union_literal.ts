// 삼항 연산자

import { type } from "os";

// 변수 변수명 = 조건문 ? 참 : 거짓;
let aaa = 3;
if (aaa > 5) {
    console.log("5보다 큰 수");
} else {
    console.log("5이하의 수");
}
let aaa2 = aaa > 5 ? "5보다 큰 수" : "5이하의 수";

//! 유니언과 리터럴

//? 유니언(union) : 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장!하는 것
//? 내로잉(narrowing) : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히!는 것

//! 유니언 타입 (union)

let idol = Math.random() > 0.5 ? undefined : "IVE";

// 유니언 타입 선언
// 타입의 순서는 상관이 없다.

let idol2: string | null = null;

if ( Math.random() > 0.5) {
    idol2 = "aespa";
}

//! 유니언 속성

let idol3 = Math.random() > 0.5 ? "LE SSERAFIM" : 123;

// idol3.toUpperCase();
// 'string | number' 형식에 'toUpperCase' 속성이 없습니다. 'number' 형식에 'toUpperCase' 속성이 없습니다.

// idol3.toFixed();
// 'string | number' 형식에 'toFixed' 속성이 없습니다. 'string' 형식에 'toFixed' 속성이 없습니다.

idol3.toString(); // toString() : string과 number 타입 모두에서 사용할 수 있는 속성

//! 내로잉(narrowing)

//? 값 할당을 통한 내로잉

let actor: number | string; // number | string 유니언 타입

actor = "Nam Joo Hyuk";
actor.toUpperCase(); // string 타입

// actor.toFixed(); // error: 'toFixed' 속성이 'string' 형식에 없습니다.

//? 조건 검사를 통한 내로잉

let actor2 = Math.random() > 0.5 ? "Seo Kang Jun" : 29;

if (actor2 === "Seo Kang Jun") {
    actor2.toUpperCase();
} else if (actor2 === 29) {
    actor2.toFixed();
} else {
    actor2.toString();
}
// actor2.toUpperCase(); // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.

//! typeof 검사를 통한 내로잉

let actor3 = Math.random() > 0.5 ? "Park Bo Gum" : 29;

if (typeof actor3 === "string") {
    actor3.toUpperCase();
}

if (!(typeof actor3 === "string")) {
    actor3.toFixed(); // 타입 : number
} else {
    actor3.toUpperCase(); // 타입 : string
}

// 위의 if else문을 삼항 연산자로 치환
typeof actor3 === "string" ? actor3.toUpperCase() : actor3.toFixed();

//! 리터럴 타입

const student = "eun jin";
student.toUpperCase();

let student2 = "jeong bin";

// boolean : true | false
// null & undefined : 둘 다 자기 자신 / 즉, 오직 하나의 리터럴 값만 가짐
// number : 모든 숫자형태
//  string : 모든 문자열형태

let student3: number | "eun jin" | "jeong bin";

student3 = 123;
student3 = "eun jin";
student3 = "jeong bin";
// student3 = true;

//! 리터럴 할당 가능성

let student4: "sung min";

student4 = "sung min";
// student4 = "seung ah"; // '"seung ah"' 형식은 '"sung min"' 형식에 할당할 수 없습니다.

let student5 = ""; // 타입 : string
// student4 = student5; // 'string' 형식은 '"sung min"' 형식에 할당할 수 없습니다.

student5 = ":)"; // 변수 할당

//! 타입 별칭

// let color: "red" | "blue" | "green" | "gray";
// let color2: "red" | "blue" | "green" | "gray";
// let color3: "red" | "blue" | "green" | "gray";

// 기본형 : type 새로운 이름 = 타입
type colors = "red" | "blue" | "green" | "gray";

let color: colors;
let color2: colors;
let color3: colors;