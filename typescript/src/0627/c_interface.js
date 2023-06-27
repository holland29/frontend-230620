// 인터페이스
var student5;
student5 = {
    born: 2000,
    name: "seungah",
};
function printLabel(labbelledObj) {
    console.log(labbelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
