//! 빨간 주석의 경우 주석을 해제하면서 코드를 읽어주세요( 읽고 난 후에는 다시 주석처리! )

//! 물결선이 그어진 오류 코드 위로 마우스 올리기

//? [1]
// 일반 JS 구문으로 작성된 코드
// 문자열의 길이 속성이 함수가 아니라 숫자라는 지식을 활용해 오류에 빨간 물결선이 표시

const firstName = "SeungAh";
//! const nameLength = firstName.length();

// 코드를 입력할 때 편집기에서 간단한 오류를 미리 알려주면, 코드를 실행하고 오류가 발생할 때까지 기다리는 것보다 훨씬 유용
// 자바스크립트에서는 위 코드 실행 시 오류 발생

//? [2]
// 타입스크립트 사용 시 매개변수와 변수에 제공되는 값의 타입을 지정가능(제한)
// EX) 함수의 매개변수 개수 변경 시, 변경된 함수를 호출하는 코드를 업데이트 하지 않을 경우 오류 발생

// 이전 코드: sayMyName(firstName, lastNameName) { ... }
function sayMyName(fullName) {
    console.log(`My name is ${fullName}`);
}

//! sayMyName("SeungAh", "Lee");

//? [3]
// 앞서 javascript.js에서 다뤘던 paintPainting 함수의 타입스크립트 버전
// 코드를 문서화하는 타입스크립트의 정밀함 확인
// 아래의 코드를 처음 보는 개발자라도 Painter에 적어도 세 가지 속성이 있고, 그중 두 가지는 메서드라는 것을 이해
// 타입스크립트는 구문을 적용해 객체의 형태를 설명

// 아래의 코드의 경우 전체적인 코드의 일부만 가져왔기 때문에 주석해제시 오류가 발생 (코드가 잘못되어 발생하는 오류X)

/*
interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Materal[]): boolean;
}

function paintPainting(painter: Painter, painting: string): boolean {}
*/

//? [4]
// VS Code에서 자바스크립트 코드 작성 시 문자열 같은 객체의 내장 코드를 작성할 때 '자동 완성' 제안
// 타입스크립트의 경우 이미 작성한 코드에 대해서도 '자동 완성'과 같은 유용한 제안을 제공

// 위의 코드에서 paintPainting 함수 내에서 painter를 입력하면 painter 매개변수가 Painter 타입이고, Painter타입이 같은 멤버를 갖는다는 것을 확인 가능