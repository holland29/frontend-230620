// 인터페이스

// 타입별칭 vs 인터페이스(interface)

type Human = {
  born: number;
  name: string;
};

interface Human2 {
  born: number;
  name: string;
}

let student5: Human2;

student5 = {
  born: 2000,
  name: "seungah",
};

// student5 = "lsa";

// 인터페이스
// 타입 검사기가 타입 별칭보다 더 빨리 작동
// 오류 메시지를 더 구체화하여 보여줍니다.

interface LabelledValue {
  label: string;
}

function printLabel(labbelledObj: LabelledValue) {
  console.log(labbelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//? 선택적 프로퍼티

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);

interface User1 {
  name: string;
  age: number;
  etc?: boolean; // 선택 속성
}

let userA: User1 = { name: "SeungAh", age: 99 };
let userB: User1 = { name: "SeungAh", age: 99, etc: true };

// 익명 인터페이스

let ceo: {
    name: string;
    age: number;
    etc?: boolean;
} = { name: "seungah", age: 88 };

function printCeo(me: { name: string, age: number, etc?: boolean }) {
    console.log(
        me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
    );
}

printCeo(ceo);

// 읽기 전용 속성

interface Page {
    readonly text: string;
}

function read(page: Page) {
    // text의 속성을 수정하지 않고 읽는 것
    console.log(page.text);

    // page.text += "!";
}

//! 인터페이스 확장
// extends

interface Writing2 {
    title: string;
}

interface Book extends Writing2 {
    pages: number;
}

let myBook: Book = {
    pages: 200,
    title: "hello",
}