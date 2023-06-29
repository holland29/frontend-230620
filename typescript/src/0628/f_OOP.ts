// 객체 지향 프로그래밍
// 객체지향 프로그래밍(OOP)은 프로그래밍 패러다임 중 하나로,
// 소프트웨어를 객체들의 집합으로 보고 이들이 상호작용하는 방식으로
// 프로그램을 설계하고 구현하는 것을 의미

//! 1. 클래스(Class)
class Car_ {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  drive() {
    console.log("Driving...");
  }
}

let myCar = new Car_("Red");
myCar.drive();

//! 2. 상속과 다형성
// 상속
// : 클래스는 다른 클래스로부터 속성과 메소드를 상속 가능
// : 코드 재사용성 향상, 관련 클래스 간의 관계를 명확하게 지정

// 다형성
// 하나의 인터페이스 또는 부모 클래스 타입이 여러 자식 클래스 타입으로 변환 가능한 성질

class Vehicle$ {
  drive() {
    console.log("Driving a vehicle...");
  }
}

class Car$ extends Vehicle$ {
  drive() {
    console.log("Driving a car...");
  }
}

let myVehicle: Vehicle$ = new Vehicle$();
myVehicle.drive(); // Driving a vehicle...

let myCar$: Vehicle$ = new Car$();
myCar.drive(); // Driving a car...

//! 추상클래스와 인터페이스
// 추상클래스
// : 직접 인스턴스화 할수 없는 클래스
// : 기본적인 구조와 기능을 정의 & 확장하여 사용 가능

// 인터페이스
// : 클래스가 특정 메소드를 포함하도록 강제하는 구조
// : 클래스 간의 계약을 정의하는 데 유용
interface Drivable {
  drive(): void;
}

class Car_$ implements Drivable {
  drive() {
    console.log("Driving a car...");
  }
}

let myCar_$: Drivable = new Car_$();
myCar.drive(); // Driving a car...

//! 접근 제어자와 프로퍼티
// 접근제어자 : public, private, protected
// 프로퍼티: getter, setter를 사용하여 클래스 프로퍼티(속성)에 접근하는 것을 제어 가능

class Subway {
    // 정보은닉(캡슐화): private 접근제한자를 사용해 클래스의 상태를 외부로부터 감추는 역할
    private _speed: number = 0;

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        if (value >= 0) {
            this._speed = value;
        } else {
            this._speed = 0;
        }
    }
}
let mySubway = new Subway();
mySubway.speed = 5;
console.log(mySubway.speed); //5