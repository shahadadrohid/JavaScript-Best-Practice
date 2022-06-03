let havePassport = true;
let haveVisa = false;
let haveMoney = 400000;
let haveWorkPermit = false;

if ((havePassport == true && haveWorkPermit == true) || (haveMoney >= 500000)) {
    console.log('InShaa Allah you will go to Oman')
}
else if (havePassport == true && haveVisa == true) {
    console.log('InShaa Allah brother you will go to Oman')
}
else {
    console.log('I am sorry Brother')
}

// Tour Destination 

let tourdestination = ["Cox'Bazar", 'Bandarban', 'Shylet', 'Rangamati', 'Kaptai']
console.log(tourdestination.length)
console.log(tourdestination.indexOf('Shylet'))

tourdestination[1] = 'Khagrachori';

if (tourdestination[1] == 'Bandarban') {
    console.log('InShaa Allah i will go to bandarban')
}
else if (tourdestination.length == 4) {
    console.log('Inshaa Allah pura desh ghurbo')
}
else {
    console.log('InShaa Allah arek somoy jabo')
}


// Traffic Light

let trafficLight = ['green', 'yellow', 'red']

if (trafficLight[2] == 'green') {
    console.log('Rasta par hobo')
}
else if (trafficLight[0] == 'yellow') {
    console.log('Rasta par howar jonno ready hou')
}
else if (trafficLight[1] == 'red') {
    console.log('Akn rasta par howa jabe na')
}
else {
    console.log('Bhai ekhanei darai thak')
}

// Grade Calculation 

const aliasNum = 95;
const daliasNum = 66;
const saliasNum = 80;
const maliasNum = 59;
const liliasNum = 47;
const jalaisNum = 77;

// Alia's Grade

if (aliasNum >= 90) {
    console.log('Alia got A+')
}
else if (aliasNum >= 80) {
    console.log('Alia got A')
}
else if (aliasNum >= 70) {
    console.log('Alia got B')
}
else if (aliasNum >= 60) {
    console.log('Alia got C')
}
else if (aliasNum >= 50) {
    console.log('Alia got D')
}
else if (aliasNum < 50) {
    console.log('Alia got F')
}
else {
    console.log("Sorry i did't find the grade")
}

// Dalia's Grade 
if (daliasNum >= 90) {
    console.log('Dalia got A+')
}
else if (daliasNum >= 80) {
    console.log('Dalia got A')
}
else if (daliasNum >= 70) {
    console.log('Dalia got B')
}
else if (daliasNum >= 60) {
    console.log('Dalia got C')
}
else if (daliasNum >= 50) {
    console.log('Dalia got D')
}
else if (daliasNum < 50) {
    console.log('Dalia got F')
}
else {
    console.log("Sorry i did't find the grade")
}

// Salia's Grade 

if (saliasNum >= 90) {
    console.log('Salia got A+')
}
else if (saliasNum >= 80) {
    console.log('Salia got A')
}
else if (saliasNum >= 70) {
    console.log('Salia got B')
}
else if (saliasNum >= 60) {
    console.log('Salia got C')
}
else if (saliasNum >= 50) {
    console.log('Salia got D')
}
else if (saliasNum < 50) {
    console.log('Salia got F')
}
else {
    console.log("Sorry i did't find the grade")
}

// Malia's Grade 

if (maliasNum >= 90) {
    console.log('Malia got A+')
}
else if (maliasNum >= 80) {
    console.log('Malia got A')
}
else if (maliasNum >= 70) {
    console.log('Malia got B')
}
else if (maliasNum >= 60) {
    console.log('Malia got C')
}
else if (maliasNum >= 50) {
    console.log('Malia got D')
}
else if (maliasNum < 50) {
    console.log('Malia got F')
}
else {
    console.log("Sorry i did't find the grade")
}

// Lilia's Grade 
if (liliasNum >= 90) {
    console.log('lilia got A+')
}
else if (liliasNum >= 80) {
    console.log('lilia got A')
}
else if (liliasNum >= 70) {
    console.log('lilia got B')
}
else if (liliasNum >= 60) {
    console.log('lilia got C')
}
else if (liliasNum >= 50) {
    console.log('lilia got D')
}
else if (liliasNum < 50) {
    console.log('lilia got F')
}
else {
    console.log("Sorry i did't find the grade")
}

// Jalai's Grade 
if (jalaisNum >= 90) {
    console.log('jalaia got A+')
}
else if (jalaisNum >= 80) {
    console.log('jalaia got A')
}
else if (jalaisNum >= 70) {
    console.log('jalaia got B')
}
else if (jalaisNum >= 60) {
    console.log('jalaia got C')
}
else if (jalaisNum >= 50) {
    console.log('jalaia got D')
}
else if (jalaisNum < 50) {
    console.log('jalaia got F')
}
else {
    console.log("Sorry i did't find the grade")
}