"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log("i can drive");

//FUNCTIONS
//Definition
// function log(x) {
//   console.log("I am LOGGER function " + x);
// }

// //Calling
// log(4);
// log(2);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// console.log(calcAge1(1998));

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// console.log(calcAge1(1990));

// console.log(calcAge1(2000) - calcAge2(2001));

//ARROW FUNCTION
// const calcAge3 = (birthYear) => 2022 - birthYear;
// console.log(calcAge3(1990));

// const yearsUntillRetirement = (birthYear, name) => {
//   const age = 2022 - birthYear;
//   return 65 - age + " " + name;
// };
// console.log(yearsUntillRetirement(1980, "Faizan"));
//ARROW FUNCTION ENDS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} from apple and ${orangePieces} from oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//CHALLENGE
// const calcAverage = (x, y, z) => {
//   return (x + y + z) / 3;
// };

// function calcAverage(x, y, z) {
//   return (x + y + z) / 3;
// }

// const avgDolphins = calcAverage(30, 40, 50);
// console.log("avgDolphins " + avgDolphins);
// const avgKoalans = calcAverage(30, 60, 80);
// console.log("avgKoalans " + avgKoalans);
// function checkWinner(avgDolphins, avgKoalans) {
//   if (avgDolphins > avgKoalans) {
//     console.log("Dolphins won by " + (avgDolphins - avgKoalans));
//   }
//   if (avgKoalans > avgDolphins) {
//     console.log("Kalans won by " + (avgKoalans - avgDolphins));
//   } else {
//     console.log("Draw");
//   }
// }

// checkWinner(avgDolphins, avgKoalans);

//Function ENDS

//ARRAYS
// const friends = ["abc", "xyz", "def"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);

// const years = new Array(1111, 1112, 1113, 1114, 1115);
// console.log(years[3]);

// const name = "Faizan";
// const age = "24";
// const myProfile = [name, age];
// console.log(myProfile);

// //ADD AT END
// myProfile.push("Hiii");
// console.log(myProfile);

// //ADD AT Begining
// myProfile.unshift("Xcuse");
// console.log(myProfile + " " + myProfile.indexOf("Xcuse"));

// //Remove last element
// myProfile.pop();
// console.log(myProfile);

// //Remove first element
// myProfile.shift();
// console.log(myProfile);

// console.log(myProfile.includes("Faizan"));

// //Challenge
// let tip;
// const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);
// console.log("Hiii your tip is " + calcTip(1234));

// const bills = new Array(125, 555, 44);
// console.log(bills);

// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//ARRAY ENDS

//OBJECT STARTS
// const myObj = {
//   firstname: "Faiz",
//   lastname: "an",
//   age: 24,
//   friends: ["xyz", "def"],
//   hasDriverLicense: true,
//   calcAge: (birthYear) => {
//     return 2022 - birthYear;
//   },

//   calcAge2: () => {
//     return this.age;
//   },
//   getSummary: function () {
//     return `My name is ${
//       this.firstname
//     } and my age is ${this.calcAge()} and i ${
//       this.hasDriverLicense ? "have" : "don't have"
//     } driving license.`;
//   },
// };

// console.log(myObj);
// console.log(myObj.friends);
// console.log(myObj["friends"]);
// console.log(myObj.calcAge(1998));
// console.log(myObj["calcAge"](1998));
// console.log(myObj.calcAge2());
// console.log(myObj.getSummary());

//CHALLENGE
// const markObj = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const johnObj = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (johnObj.calcBMI() > markObj.calcBMI())
//   console.log(
//     `John has ${johnObj.calcBMI() - markObj.calcBMI()} higher BMI than Mark`
//   );
// else
//   console.log(
//     `Mark has ${markObj.calcBMI() - johnObj.calcBMI()} higher BMI than John`
//   );

//OBJECTS END

//LOOP STARTS
// let rep;
// for (rep = 1; rep <= 10; rep++) console.log("Hii " + rep);

//LOOPING AN ARRAY
// const myArr = ["Jonas", 1991, "teacher"];
// const types = [];
// for (let i = 0; i < 3; i++) {
//   console.log(myArr[i]);
//   types[i] = typeof myArr[i];
// }
// console.log(types);

// const years = [1991, 1933, 1998, 1978];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages[i] = 2022 - years[i];
// }
// console.log(ages);

//CONTINUE AND BREAK
// const myArr = ["Jonas", 1991, "teacher"];
// const types = [];
// for (let i = 0; i < 3; i++) {
//   if (typeof myArr[i] !== "string") continue;
//   console.log(myArr[i]);
//   types[i] = typeof myArr[i];
// }
// console.log(types);

// const myArr = ["Jonas", 1991, "teacher"];
// const types = [];
// for (let i = 0; i < 3; i++) {
//   if (typeof myArr[i] === "number") break;
//   console.log(myArr[i]);
//   types[i] = typeof myArr[i];
// }
// console.log(types);

//LOOPING BACKWARDS
// const myArr = ["Jonas", 1991, "teacher"];
// const types = [];
// for (let i = myArr.length; i >= 0; i--) {
//   console.log(i + " " + myArr[i]);
//   types[i] = typeof myArr[i];
// }
// console.log(types);

//WHILE LOOP
// let rep = 1;
// while (rep < 10) {
//   console.log("Rep===" + rep);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6);
// while (dice !== 5) {
//   console.log(dice);
//   dice = Math.trunc(Math.random() * 6);
//   if (dice === 5) console.log("Loop Ended");
// }

//Challenge
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = (bill) => (bill > 300 ? bill * 0.15 : bill * 0.2);
// for (let i = 0; i < bills.length - 1; i++) {
//   console.log("Bills   " + bills[i]);
//   tips[i] = calcTip(bills[i]);
//   console.log("Tips   " + tips[i]);
//   totals[i] = bills[i] + tips[i];
//   console.log("Totals   " + totals[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const calcAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log("SUM===" + sum);
//   return sum / arr.length;
// };
// console.log(calcAvg(arr));
