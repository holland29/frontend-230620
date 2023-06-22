// 객체

//! 객체 타입
// 객체 타입 : 객체의 값과 동일한 속성명과 원시 타입을 갖는다.
// 값의 속성에 접근하려면 value.멤버 또는 value['멤버']구문 사용

const seungah = {
    phoneNumber: 12341234,
    address: "부산시"
};

seungah.phoneNumber; // 타입 number
seungah['address']; // 타입 string

// seungah.name; // '{ phoneNumber: number; address: string; }' 형식에 'name' 속성이 없습니다.

//! 객체 타입 선언

// let poetLater: {
//     born: number;
//     name: string
// }

// poetLater = {
//     born: 1111,
//     name: "Lee Seung Ah"
// }

// poetLater = "Jeong Bin"; // 'string' 형식은 '{ born: number; name: string; }' 형식에 할당할 수 없습니다.

//! 별칭 객체 타입

type Poet = {
    born: number;
    name: string
}

let poetLater: Poet;

poetLater = {
    born: 1111,
    name: "Lee Seung Ah"
}

// poetLater = "Jeong Bin"; // 'string' 형식은 'Poet' 형식에 할당할 수 없습니다.

//! 구조적 타이핑

type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
}

const hasBoth = {
    firstName: "Seung Ah",
    lastName: "Lee",
};

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

// 구조적 타이핑의 경우 덕 타이핑과 다릅니다.
// 덕 타이핑 : 동적 타이핑의 한 종류로 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미합니다.

// 타입 스크립트의 경우 타입 검사기에서 구조적 타이핑을 사용해서 정적 타이핑 검사를 진행합니다.
// 자바스크립트의 경우 : 덕 타이핑,  타입스크립트의 경우 : 구조적 타이핑

//! 중첩된 객체 타입

// type Poem = {
//     author: {
//         firstName: string;
//         lastName: string;
//     }
//     name: string;
// }

// const poemMatch: Poem = {
//     author: {
//         firstName: "seungah",
//         lastName: "Lee",
//     },
//     name: "butterfly",
// };

type Author = {
    firstName: string;
    lastName: string;
}

type Poem = {
    author: Author;
    name: string;
}

const poemMatch: Poem = {
    author: {
        firstName: "seungah",
        lastName: "Lee",
    },
    name: "butterfly",
};

//! 객체 타입 유니언

//? 유추된 객체 타입 유니언
const poem2 = Math.random() > 0.5 ? { name: "Seung Ah", pages: 10 } : { name: "Hye ri", flag: true };

// { name: string, pages: number; flag: undefined }
// 또는 { name: string, pages: undefined, flag: boolean}

poem2.name;
poem2.pages;
poem2.flag;

//? 명시된 객체 타입 유니언
type Pages = {
    name: string;
    pages: number;
}

type Flag = {
    name: string;
    flag: boolean;
}

type Poem3 = Pages | Flag;

const poem3: Poem3 = Math.random() > 0.5 ? { name: "Seung Ah", pages: 10 } : { name: "Hye ri", flag: true };

poem3.name;
// poem3.pages;
// poem3.flag;

//! 교차 타입
// 타입스크립트에서는 & (교차 타입)을 사용해 여러 타입을 동시에 나타낼 수 있다.

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;
// {
//     genre: string;
//     name: string;
//     pages: number;
//  }


//*
type ShortPoem = { author: string } & ({ kigo: string; type: "hello"; } | { meter: number;  type: "hi"});

const moring: ShortPoem = {
    author: "Seung Ah",
    kigo: "Morning",
    type: "hello",
};

// const afternoon: ShortPoem = {
//     author: "Hye Ri",
//     type: "hi",
// }