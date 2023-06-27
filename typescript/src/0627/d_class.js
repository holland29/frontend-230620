// 클래스
// 기본형태
// class 클래스 이름 {
//     [private | protected | public] 속성이름: 속성타입
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.name);
    };
    return User;
}());
var user = new User("SeungAh", 99);
console.log(user);
// 클래스의 생성자(constructor) -> 메서드
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var Student2 = /** @class */ (function () {
    function Student2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student2;
}());
var jimin = new Student2("jimin", 88);
console.log(jimin);
//
