//VARIABLES
// let js = "amazing";
// let firstName = "jonas";
// console.log(js + " " + firstName);

//TYPE OF
// console.log(typeof js);
// console.log(typeof 23);
// console.log(typeof false);

// js = 10;
// console.log(typeof js);
// console.log(typeof xyz);
// console.log(typeof null);
//END VARIABLES

//DATATYPES
//Correct
// let age = 31;
// age = 32;
// console.log(age);

//Incorrect Will create error constant cannot be redeclared
// const birthYear = 1998;
// birthYear = 1992;
// console.log(birthYear);

//Correct
// var job = "programmer";
// job = "teacher";
// console.log(job);

//OPERATORS
//AGE CALC...
// const currentYear = 2022;
// const ageMine = currentYear - birthYear;
// console.log(ageMine);

//POWER
// const power = 2 ** 3;
// console.log(power);

//DIVISION
// const division = currentYear / birthYear;
// console.log(division);

//MOD
// const mod = currentYear % birthYear;
// console.log(mod);

//BOOLEAN
// console.log(birthYear < currentYear);

//BMI
// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// let markBmi = markWeight / markHeight ** 2;
// console.log(markBmi);

// let johnBmi = johnWeight / johnHeight ** 2;
// console.log(johnBmi);

// console.log(markBmi > johnBmi);
//END OPERATORS

//STRINGS
// const fName = "Faizan";
// const lName = "Ahmad";
// const fullName = fName + " " + lName;
// console.log("Hii i am " + fullName);
// console.log(`I am ${fullName} \n using template string`);
//END STRINGS

//DECISION MAKING
//CONTROL STRUCTURE
// const age = 17;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Yooooooo!!! Eligible for driving license");
// } else {
//   console.log("Better luck next time");
// }

// let century;
// const birthYear = 1996;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const johnWeight = 60;
// const johnHeight = 1.8;

// const markWeight = 50;
// const markHeight = 1.6;

// const johnBmi = johnWeight / johnHeight ** 2;
// const markBmi = markWeight / markHeight ** 2;
// console.log(`John BMI= ${johnBmi}\nMark BMI= ${markBmi}`);

// if (johnBmi > markBmi) {
//   console.log(`John has more BMI than Mark i.e., ${johnBmi - markBmi}`);
// } else {
//   console.log(`Mark has more BMI than John i.e., ${markBmi - johnBmi}`);
// }
//DECISION MAKING ENDS

//TYPE CONVERSION
// const inputYear = "1991";
// console.log(inputYear + 21);
// console.log(Number(inputYear) + 21 + inputYear);

// console.log(Number("Faizan")); //Not a number
// console.log(typeof NAN);

// console.log(typeof String(23), typeof 23);

// //TYPE COERCION
// console.log("I am " + 24 + " Years old");
// console.log("23" - "22");
// console.log("23" / "22");
// console.log("23" > "22");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);
//TYPE CONVERSION ENDS

// FALSY VALUES 0,"",undefined,null,NaN
// console.log(Boolean(0));
// console.log(Boolean("string"));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Dont spend");
// } else {
//   console.log("Get a job");
// }

// let height;
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is undefined");
// }

//FALSY VALUES ENDS

//= , == AND ===
// const age = 18;
// if (age === 18) {
//   //Checking Datatype also
//   console.log("i am 18");
// }

// const age1 = "18";
// if (age1 == 18) {
//   //Not checking Datatype
//   console.log("i am 18");
// }

// const favourite = prompt("Wat is your favourite number");
// console.log(typeof favourite);

//BASIC BOOLEAN LOGICICAL OPERATORS STARTS
// const hasDrivingLicense = true;
// const hasGoodVision = false;
// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);

// //CHALLENGE
// const avgDolphinScore = (96 + 108 + 89) / 3;
// const avgKoalasScore = (88 + 91 + 110) / 3;

// if (avgDolphinScore > avgKoalasScore) {
//   console.log(`Dolphins won by ${avgDolphinScore - avgKoalasScore}`);
// } else if (avgKoalasScore > avgDolphinScore) {
//   console.log(`Koalas won by ${avgKoalasScore - avgDolphinScore}`);
// } else {
//   console.log("Match Draw");
// }

//SWITCH CASE
// const day = "tuesday";
// switch (day) {
//   case "monday":
//     console.log("Monday");
//     break;
//   case "tuesday":
//     console.log("Tuesday");
// }

//Ternary operator
// const age = 15;
// age >= 18 ? console.log("Yo 18") : console.log("Underage");

// //CHALLENGE
// const bill = 400;

// bill >= 50 && bill <= 300
//   ? console.log("Bill is ist " + bill + ". Tip is " + (bill * 15) / 100)
//   : console.log("Bill is 2nd " + bill + ". Tip is " + (bill * 20) / 100);
//CHALLENGE ENDS
