'use strict';
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('KJ123', '123', '7676');
// createBooking('KQ123', undefined, '7676');

//Call by value and refrence
// const flight = 'Lh123';
// const jonas = {
//   name: 'Faizan',
//   passport: 6327182689,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LQ545';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 6327182689) {
//     alert(`Welcome ${passenger.name} your flight number is ${flightNum}`);
//   } else {
//     alert('Wrong Passport number');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/////////Js has only pass by valueeeeeeeeeee that works as refrence

//First class fxns i.e  functions are simply values ,they are just another type of object

///Higher order fxns recieves another fxn as an arguments and returns a new fxns.

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order fxn =>passing fxn as an argument
// const transformer = function (str, fn) {
//   console.log('Original string ' + str);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformer('Javascript is best language', upperFirstWord);
// transformer('Javascript is best language', oneWord);

// const high5 = function () {
//   console.log('High 5');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'Martha', 'hey'].forEach(high5);

// //Returning a fxn
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Faizan');

// greet('Hello')('Faizan');

// //OR
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hello')('Faizan');

// const airArab = {
//   airline: 'AirArab',
//   iataCode: 'AA',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// airArab.book(234, 'Faizan');
// console.log(airArab);

// const indiaEm = {
//   airline: 'India',
//   iataCode: 'TR',
//   bookings: [],
// };

// const book = airArab.book;

// // book(23, 'Azan');//Doesnt work as now book is seperate method and this become undefined
// // Using Call
// book.call(indiaEm, 23, 'Azan'); //now this points to first arg
// book.call(airArab, 44, 'Faizan');

// ////Using Apply
// const flightData = [6345, 'Cooper'];
// book.apply(indiaEm, flightData);
// book.call(airArab, ...flightData);

// ////Bind Method
// const bookInd = book.bind(indiaEm);
// bookInd(23, 'William');

// const bookArab = book.bind(airArab);
// bookArab(54, 'Yaamin');

// const bookEWQ = book.bind(indiaEm, 234);
// bookEWQ('Faizan');
// bookEWQ('Axaan');

// //With Event Listeners
// indiaEm.planes = 200;
// indiaEm.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };
// indiaEm.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', indiaEm.buyPlane.bind(indiaEm));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value =>value+value*0.23;

// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///Challenge
// const poll = {
//   question: 'Whis is your fav. prog. lang?',
//   options: ['0:Javascript', '1:Python', '3:C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnser() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}\n(Write an answer)`)
//     );
//     console.log(answer);
//     console.log(this.answers.length);
//     //Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnser();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnser.bind(poll));

// console.log(poll.displayResults.call({ answers: [5, 2, 3] }, 'string'));
// console.log(poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }));

// const runOnce = function () {
//   console.log('run whenever you want time');
// };
// runOnce();

// //Immediately invoked
// (function () {
//   console.log('run one time only');
// })();

// (() => console.log('run one time only'))();

// {
//   const isPrivate = 23;
//   var isNotPrivate = 23;
// }
// // console.log(isPrivate); //isPrivate is unaccessable
// console.log(isNotPrivate); //isPrivate is accessable

///CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;
//   console.log('In higher order ' + passengerCount);
//   return function () {
//     passengerCount++;
//     console.log('In Sub ' + passengerCount);
//   };
// };
// //? A closure makes sure that a function doesnt loose connection to variables that existed at the functions birth place....
// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 23);
//   };
// };

// g();
// f();
// console.dir(f);

// const h = function () {
//   const b = 666;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// h();
// f();
// console.dir(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3; //more prior than outer variable
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// setTimeout(function () {
//   console.log('Timer');
// }, 6000);

//Challenge
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
