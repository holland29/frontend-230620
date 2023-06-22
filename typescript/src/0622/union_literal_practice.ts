// 유니언 타입을 활용한 계산기 함수

// 사칙연산(더하기, 빼기, 곱하기, 나누기)을 수행하는 calculate 함수입니다.
// 해당 함수는 연산자로 사용할 문자열("add" | "substract" | "multiply" | "divide")과 두 개의 숫자를 인자로 받아야 합니다.
// 이 연산자 문자열은 명시적으로 위에서 제시한 4가지 리터럴 중에 하나만을 인자로 받아야 합니다.
// 또한 함수의 반환 값은 계산 결과인 숫자여야 합니다.

type Operation = "add" | "substract" | "multiply" | "divide";

function calculate(operation: Operation, a: number, b: number): number {
    switch (operation) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
    }
}

// 리터럴 타입을 활용한 예제

// 타입이 left, right, up, down인 Direction 타입 별칭
// 해당 Direction 타입 중 하나를 인자로 받아서 해당 방향으로 이동하는 명령을 출력합니다.
// >> 콘솔창에 템플릿 문자열을 사용해서 Moving 인자

// 함수 move를 작성하세요
// 이 함수는 명시적으로 위에서 제시한 4가지 리터럴 중 하나만을 인자로 받아야 합니다.

type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}