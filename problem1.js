function checkNum(num1, num2) {
    if (num1 == num2 || num1 + num2 == 100) {
        return true;
    }
    else {
        return false;
    }
}

var num1 = 50;
var num2 = 50;

var result = checkNum(50, 50);
console.log(result);