// function startFan() {
//     console.log('Press the switch')
//     // return
// }

// startFan()
// let result = startFan()
// console.log(result)

function buyMilk(taka) {
    let milkPrice = 50;
    let milkQuantity = taka / milkPrice;
    return milkQuantity
}

var milkMoney = 400;
var milkQuantityResult = buyMilk(milkMoney);
console.log(milkQuantityResult)

// Multiple Parameter 
function multiplyNumber(num1, num2) {
    var total = num1 * num2;
    return total;
}

var firstNumber = 10;
var secondNumber = 10;
var result = multiplyNumber(firstNumber, secondNumber);
console.log(result);