// 클래스

// 기본형태
// class 클래스 이름 {
//     [private | protected | public] 속성이름: 속성타입
// }

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

let user = new User("SeungAh", 99);
console.log(user);

// 클래스의 생성자(constructor) -> 메서드

class Student {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  // 생성자의 매개변수에 (public과 같은 접근 제한자를 붙이면) 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼
}

class Student2 {
  constructor(public name: string, public age: number) {}

}

let jimin: Student2 = new Student2("jimin", 88);
console.log(jimin);

// 접근 제어자
// 클래스 속성은 public, private, protected와 같은 접근 제한자를 속성 이름 앞에 붙일 수 있다.

// 만약에 생략하면 모두 public으로 간주

// public(기본값): 어디서든 접근 가능
// 클래스 내부, 하위 클래스, 인스턴스 등 모든 곳에서 해당 멤버를 볼 수 있다.
// 명시적 표시X

class Car {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }
}

// private: 오직 해당 클래스 내부에서만 접근 가능합니다.
// 클래스 외부, 하위 클래스에서는 이 멤버를 볼 수 없습니다.

class Car2 {
    private engineOn: boolean;

    constructor() {
        this.engineOn = false;
    }

    startEngine() {
        this.engineOn = true;
    }
}

// new Car2(true).engineOn; Error: 'engineOn' is private;

// protected 해당 클래스와 하위 클래스 내부에서 접근 가능합니다.
// private 유사하게 외부에서는 볼 수 없지만, protected는 하위 클래스에서는 접근 가능합니다.

class Vehicle {
    protected speed: number;

    constructor() {
        this.speed = 0;
    }
}

class Car3 extends Vehicle {
    accelerate() {
        this.speed += 10; // 'speed'가 protected이기 때문에 하위 클래스에서 접근 가능
    }
}

// 캡슐화와 정보 은닉 등의 객체지향 프로그래밍 원칙을 적용하는데 도움
// 클래스 내부 상태를 보호, 사용자에게 클래스의 사용 방법을 더 명확하게 전달

// 클래스의 인터페이스 구현

interface Person {
    name: string;
    age: number;
}

class PerA implements Person {
    name!: string;
    age!: number;
}

// 추상 클래스

// abstract 키워드 사용

abstract class teacher {
    abstract name: string; // 해당 속성을 상속하는 다른 클래스에서 이 속성이나 메서드를 구현
    constructor (public age?: number) {}
}

// 속성 앞에 abstract : new연산자를 사용해서 객체를 만들 수 X

// 클래스의 상속
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof! woof!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);

// static 속성
// 정적인 속성을 가질 수 있다.

class ABC {
    static initValue = 1; 
    // 클래스 객체에서는 직접적으로 접근할 수 없습니다.
    // 오직 클래스 자체에서만 접근 가능
    // 상속 X, 하위 클래스에서 재정의X
}

let inVal = ABC.initValue;