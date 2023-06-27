// 배열
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var warriors = ["seungah", "junkuk"];
warriors.push("jimin");
// warriors.push(123);
//! 배열 타입
var arrayOfNumber;
arrayOfNumber = [1, 2, 3, 4, 5];
// 타입은 string이고 반환 값으로 string배열을 반환하는 함수
var createString;
// 타입은 각각의 string을 반환하는 함수 배열
var stringCreators;
//! 유니언 타입 배열
// 타입: string 또는 number의 배열
var strOrArray;
// 타입: 각각 number 또는 string 요소의 배열
var arrayOfStrOrArray;
// 타입: (string | undefined)[]
var names = ["seungah", "junkuk", "eunjin", undefined];
//! any 배열
// 초기에 빈 배열로 선언된 변수: any[] 타입으로 취급
var values = [];
values.push(" ");
values[0] = 0;
//! 다차원 배열
// 2차원 배열 or 두 개의 대괄호를 가집니다
var arrayOfArray;
// let arrayOfArray: (number[])[];
arrayOfArray = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
];
//! 배열 멤버
var defenders = ["seungah", "junkuk"];
var defender = defenders[0];
var students = ["eunjin", "hyeri", new Date(1997, 3, 14)];
var student = students[0];
//! 스프레드 & 나머지 매개변수
// 스프레드
var teachers = ["A", "B", "C"];
var teacherAges = [99, 88, 77];
var merged = __spreadArray(__spreadArray([], teachers, true), teacherAges, true);
console.log(merged);
// 나머지 매개변수 스프레드
function logGreet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("".concat(greeting, ", ").concat(name_1));
    }
}
var childs = ["A", "B", "C"];
logGreet.apply(void 0, __spreadArray(["Hello"], childs, false));
