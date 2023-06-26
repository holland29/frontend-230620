// 유니언 타입을 활용한 계산기 함수
function calculate(operation, a, b) {
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
var direction = "left";
function move(direction) {
    console.log("Moving ".concat(direction));
}
console.log(move);
