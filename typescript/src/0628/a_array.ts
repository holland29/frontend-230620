// 배열
let list: number[] = [1, 2, 3]; // 일반적
let list2: Array<number> = [1, 2, 3];

//! 배열 메소드
//? 1. push(): 배열의 끝에 요소 추가
let list3: number[] = [1, 2, 3];
list3.push(4); // [1, 2, 3, 4]

//? 2. pop(): 배열의 마지막 요소 제거 후 반환
let list4: number[] = [1, 2, 3]; 
// let last: number =  list4.pop(); // last: 3, list4 [1, 2]

//? 3. shift(): 배열의 첫 번째 요소를 제거 후 반환
let list5: number[] = [1, 2, 3];
// let first: number = list.shift();

//? 4. unshift(): 배열의 시작 부분에 요소 추가
let list6: number[] = [1, 2, 3];
list.unshift(0); // [0, 1, 2, 3]

//! 복합 타입의 배열
type Animals = {
  name: string;
  age: number;
};

let Lions: Animals[] = [
  {name: "lionKing", age: 10 },
  {name: "lionQueen", age: 15 },
];

//! 배열과 반복문
let list7: number[] = [1, 2, 3];

//? for문
const condition = list7.length;
for (let index = 0; index < condition; index++) {
  console.log(list7[index]);
}

//? for of문 (배열, 객체) // A of B : B의 A
for (let item of list7) {
    console.log(item);
}

//? forEach문 
list7.forEach((item) => {
    console.log(item);
})

// for of반복문 (with.함수)
function arraySum(list7: number[]): number {
    let sum: number = 0;
    for (let num of list7) {
        sum += num;
    }
    return sum;
}

//! 배열의 변형
let numbers: number[] = [1, 2, 3, 4, 5];

//? 1. map 메서드(method)***
// 배열 내의 모든 요소 각각에 대해 제공된 함수를 호출한 결과를 모아
// 새로운 배열을 반환
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//? 2. filter 메서드
// 제공된 함수의 테스트를 통과하는 모든 요소를 모아
// 새로운 배열로 반환
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//? 3. reduce 메서드
// 배열의 각 요소에 대해 제공된 reducer 함수를 실행한 후
// 단일 출력값으로 줄입니다.
// 누적값을 호출하는 메서드
let sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log(sum); 