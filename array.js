var friendsName = ['Ayon', 'Nayon', 'Sahed', 'Abhijit'];
var decimelNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Index 
var index = friendsName.indexOf('Sahed');
console.log(index)

// Element
var getelement = friendsName[1];
console.log(getelement)

// -1 Index
var index = decimelNumber.indexOf(12)
console.log(index)

// Change the index value 
friendsName[2] = 'Sajid'
console.log(friendsName)

// Push-Pop
let newNumber = decimelNumber.push(10)
let newNumber1 = decimelNumber.push(11)
console.log(decimelNumber)
let newNum = decimelNumber.pop()
console.log(newNum)
console.log(decimelNumber)

// Shift -Unshift
var decimelNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let getNew = decimelNumber.shift();
console.log(getNew)
console.log(decimelNumber)

decimelNumber.unshift(122, 0);
console.log(decimelNumber)

// Undefined
