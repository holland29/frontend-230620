// 인스턴스
// 클래스 || 인터페이스에 의해 정의된 구조를 가진 객체(그 자체)

class obj {
    name: string; // 속성(프로퍼티) : 상태를 지정
    age: number;

    // 생성자 함수
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() { // 메서드 : 특정 동작을 수행
        console.log(`${this.name} & ${this.age}`);
    }
} 

let seungAh: obj = new obj("SeungAh", 50); // 변수 seungAh는 obj클래스의 인스턴스
// new연산자: 객체를 생성하고 초기화하는데 사용(생성자 함수 호출)

seungAh.greet(); // SeungAh & 50

// 객체지향 프로그래밍
// 프로토타입
// 모든 객체는 프로토타입이라는 다른 객체를 참조, 프로토타입 객체의 속성과 메서드를 상속
// 정의된 객체(개발자 생성) <- 프로토타입 <- Object