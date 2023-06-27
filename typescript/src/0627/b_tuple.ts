// 튜플

let dayAndEvent: [number, string];

dayAndEvent = [1225, "Christmas"];

let [day, event_] = Math.random() > 0.5 ? [1225, "Christmas"] : [314, "whiteDay"];

//! 튜플의 할당 가능성
// 타입이 같더라도 배열을 튜플에 할당할 수 없다.

const A = [false, 123];
// const AB: [boolean, number] = A;

const tuple: [boolean, number, string] = [false, 1234, "tuple"];
const tuple2: [boolean, number] = [tuple[0], tuple[1]];
// const tuple3: [boolean, number] = tuple;

//! 나머지 매개변수

// (string | number)[] : 배열

function logIn(name: string, value: number) {
    console.log(`${name} has ${value}`);
}
const pairArray = ["seungah", 1];
// logIn(...pairArray);

//! 튜플 추론

function helloAndHi (input: string) {
    return [input[0], input.length];
}

const [hello, hi] = helloAndHi("Hello");