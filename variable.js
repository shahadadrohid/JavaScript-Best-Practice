// Var ----------
// var myWeight = '56 kg'
var myheight = 5.9;

// Let ----------
// String ----------
let myWeight = '56 kg';
let collegeName = "Gachhbaria Gov't college";

// Let Number ----------
let halimPrice = 200;

// Let Boolean 
let isThisRightParkingSpot = true;

// Const ----------
// Const String 
const myName = 'Mohammad Shahadad Hossain';
const wasaToGecDistance = '1 km';

// Number 
const totalDecimelNumber = 10;
const totalBinaryNumber = 2;
const totalOctalNumber = 8;

// Boolean 
const areYouSmoke = false;


// Change variable value
var mousePrice = 3750;
mousePrice = mousePrice + 250;
console.log(mousePrice)

mousePrice -= 250;
console.log(mousePrice)

let eggPrice = 20;
eggPrice++
console.log(eggPrice)

// Addition 
let mousePrice1 = 3750;
let keyboardPrice = 2650;
console.log(mousePrice1 + keyboardPrice)

// Subtraction 
const myBudget = 100000;
let computerPrice = 87500;
console.log(myBudget - computerPrice)
const getMoneyBack = myBudget - computerPrice;
console.log(getMoneyBack)

// Multiplication 
let milkPrice = 74;
let milkQuantity = 4;
let totalMilkQuantity = milkPrice * milkQuantity
console.log(totalMilkQuantity)

// Division 
let eggPrice1 = 12;
let myMoney = 120;
let getEggs = myMoney / eggPrice1
console.log(getEggs)


// String addition 

const firstName = 'Mohammad';
const secondName = 'Shahadad';
const thirdName = 'Hossain';
console.log(firstName + ' ' + secondName + ' ' + thirdName)

// Parse Integer 
let soapPrice = '40';
let handWashPrice = '55';
console.log(soapPrice + handWashPrice);

let newSoapPrice = parseInt(soapPrice);
console.log(newSoapPrice)

let newHandWashPrice = parseInt(handWashPrice)
console.log(newHandWashPrice)

// Parse Float 
let honeyPrice = '255.55';
console.log(honeyPrice)

let newHoneyPrice = parseFloat(honeyPrice)
console.log(newHoneyPrice)

// Float Fixed 
let firstNum = 10.599;
let secondNum = 32.45655;
console.log(firstNum + secondNum)
let total = firstNum + secondNum
total = total.toFixed(2)
total = parseFloat(total)
console.log(total)

let firstNumber = 0.1;
let secondNumber = 0.2;
let total1 = firstNumber + secondNumber;
console.log(parseFloat(total1.toFixed(2)));