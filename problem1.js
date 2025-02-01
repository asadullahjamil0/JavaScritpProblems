// function checkNum(num1, num2) {
//     if (num1 == num2 || num1 + num2 == 100) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

const checkNumIfEqual = (a, b) => a == 100 || b == 100 || a + b == 100;

var num1 = 50;
var num2 = 50;

var result = checkNumIfEqual(1031, 1001);
console.log(result);