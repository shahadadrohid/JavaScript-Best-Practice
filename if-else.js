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