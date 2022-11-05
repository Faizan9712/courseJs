// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const weekdays = ['mon', 'fri', 'sat'];
// const hours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6
//   hours,
//   // order(starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = 22,
//     address = 'ABC',
//   }) {
//     console.log(
//       `Order Recieved  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${address} on ${time} `
//     );
//   },
//   orderPasta(ing1, ing2) {
//     console.log(`Here is your pasta of  ${ing1} and ${ing2}`);
//   },

//   orderPizza(mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };
// ////OBjects

// // //Calling function of object and passing the values and that fxn also has default values
// // restaurant.orderDelivery({
// //   time: '22',
// //   address: 'xyz',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // //Getting some from restaurant
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // //Getting some from restaurant and aliasing
// // const {
// //   name: restaurantNames,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantNames, hours, tags);

// // //Getting some from restaurant and setting default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // //Mutating Variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// // //Nested Objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);
// //End Objects

// ///////ARRAYS
// //Destructuring
// // const arr = [1, 2, 3];
// // const a = arr[1];
// // console.log(arr);

// // //Assigning one array to other
// // const [x, y, z] = arr;
// // console.log(arr);

// // //Assigning in different way
// // let [main, secondary] = restaurant.categories;
// // console.log(main, secondary);

// // //Swapping
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // //Swapping
// // // [secondary, main] = [main, secondary];
// // // console.log(main, secondary);

// // //Passing in another function of the object
// // console.log(restaurant.order(2, 0));
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //Nested Destructuring
// // const nested = [2, 3, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // //Setting default values
// // const [p = 1, q = 2, r = 3] = [8, 9];
// // console.log(p, q, r);
// //////End ArRAYS

// //SPRead Operators
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(...newArr);

// // //Expanding array
// // const newMenu = [...restaurant.mainMenu, 'Gnoci'];
// // console.log(newMenu);

// // //Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join two arrays
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// //Iterables: arrays,sttrings, maps ,sets not objects
// // const str = 'john';
// // const letters = [...str, ' ', 's.'];
// // console.log(letters);
// // console.log(...str);

// // const ingredients = [prompt('lets make pasta! ing 1?'), prompt('ing 2')];
// // restaurant.orderPasta(ingredients[0], ingredients[1]);
// // restaurant.orderPasta(...ingredients);

// // const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Faizan' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Pars';
// // console.log(newRestaurant);
// // console.log(restaurantCopy);
// // console.log(restaurant);

// //Rest Parameters and patterns

// //Spread because of right side of =
// // const arr = [1, 2, 3, ...[4, 5]];

// //Deconstructing
// //Spread because of left side of =
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, roti, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, roti, otherFood);

// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // //Fxns
// // const add = function (...numbers) {
// //   console.log(numbers);
// // };
// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(1, 2, 4, 5, 6, 7, 9);

// // const x = [23, 12, 7];
// // add(...x);

// // restaurant.orderPizza('mushroom', 'onion', 'olive');
// // restaurant.orderPizza('mushroom');

// //And Or operator

// //Short Circuiting
// //if first operand is true then it will always return ist operand
// // console.log(3 || 'john');
// // console.log('' || 'john');
// // console.log(true || 0);
// // console.log(undefined || null);

// console.log(undefined || 0 || ' ' || 'hello' || null); //---> ""

// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('=====AND======');

// // console.log(0 && 'jon');
// // console.log(7 && 'john');
// // console.log('hello' && 23 && null && 'john'); //--->null
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mush', 'pees');
// // }
// // restaurant.orderPizza && restaurant.orderPizza('mush', 'pestt');

// //Nulish coalescing operator
// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// /////Challenge 1
// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrista',
// //   players: [
// //     ['Neur', 'Parad', 'Martinz', 'Alaba', 'Davis'],
// //     ['Burki', 'schulz', 'akanji', 'hakimi', 'gotcha'],
// //   ],
// //   score: '4.0',
// //   scored: ['Neur', 'Parad', 'Neur', 'schulz'],
// //   date: '10 Nov',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // const players1Final = [...players1, 'Tiago', 'Harrray'];
// // console.log(players1Final);

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, draw, team2);

// // const printGoals = function (...players) {
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);
// // };

// // printGoals('Davis', 'Muller');
// // printGoals(...game.scored);

// // team1 < team2 && console.log('Team 1 is likely to win');
// // team2 < team1 && console.log('Team 2 is likely to win');

// //Challenge end

// /////Loop
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}:${item[1]}`);
// // }
// // console.log([...menu.entries()]);

// //Enhanced object literals

// //Optional Chaining
// // console.log(restaurant.hours.mon.open);

// //With optional chaining
// // console.log(restaurant.hours.mon?.open);

// //Methods
// // console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //Arrays
// // const users = [{ name: 'john', email: 'jndjsk@gmail.com' }];
// // console.log(users[1]?.name ?? 'User Empty');
// // const properties = Object.keys(hours);
// // console.log(properties);
// // let openStr = `We are open on ${properties.length} days  `;
// // for (const day of Object.keys(hours)) {
// //   openStr += `${day},`;
// // }
// // console.log(openStr);

// // const values = Object.values(hours);
// // console.log(values);

// // const entries = Object.entries(hours);
// // console.log(entries);

// // for (const [key, { open, close }] of entries) {
// //   console.log(`On ${key} we are open at ${open} and close at ${close}`);
// // }

// // console.log('=======Challenge 2===========');

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrista',
// //   players: [
// //     ['Neur', 'Parad', 'Martinz', 'Alaba', 'Davis'],
// //     ['Burki', 'schulz', 'akanji', 'hakimi', 'gotcha'],
// //   ],
// //   score: '4.0',
// //   scored: ['Neur', 'Parad', 'Neur', 'schulz'],
// //   date: '10 Nov',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // for (const [i, player] of Object.entries(game.scored)) {
// //   console.log(`${i + 1} : ${player}`);
// // }

// // let avg = 0;
// // for (const odd of Object.values(game.odds)) {
// //   avg += odd;
// // }
// // console.log(`Average is ${avg} `);

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`Odd of ${teamStr} is ${odd}`);
// // }

// ////Challenge ends

// ///Sets
// // const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Naan']);
// // console.log(ordersSet);
// // console.log(new Set('hiii'));
// // console.log(ordersSet.size);
// // console.log(ordersSet.has('bread'));
// // ordersSet.add('Garlic');
// // console.log(ordersSet);
// // ordersSet.delete('Naan');
// // console.log(ordersSet);
// // ordersSet.clear();
// // console.log(ordersSet);

// // for (const order of ordersSet) console.log(order);

// // const staff = ['waiter', 'chef', 'manager', 'chef'];
// // const staffUnique = new Set(staff);
// // console.log(staffUnique.size);

// // const newstaff = [...new Set(staff)];
// // console.log(newstaff);

// // console.log(new Set('Faizan').size);

// //////MAPS

// const rest = new Map();
// rest.set('name', 'Classico');
// console.log(rest);

// // rest
// //   .set('categories', ['italian', 'chinese'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'we are open')
// //   .set(false, 'we are closed');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get('open'));

// // const time = 21;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // console.log(rest);

// // console.log(rest.size);

// // const arr = [1, 2];
// // rest.set(arr, 'Test');
// // console.log(rest);

// // console.log(rest.get(arr));

// // console.log(rest.set(document.querySelector('h1'), 'Heading'));

// /////Map Iterationn
// // const question = new Map([
// //   ['question', 'What is best prog language?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'Js'],
// //   ['correct', 3],
// //   [true, 'Correct'],
// //   [false, 'Try Again'],
// // ]);

// // console.log(question);

// // console.log(Object.entries());

// /////Challenge 3
// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, 'Substitution'],
//   [47, 'Goal'],
//   [64, 'yellow Card'],
//   [92, 'Goal'],
// ]);

// // console.log(gameEvents.values());
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// // gameEvents.delete(64);
// // console.log(gameEvents);
// // console.log(
// //   `An event happened on average every ${90 / gameEvents.size} minutes`
// // );
// // const time = [...gameEvents.keys()].pop();
// // console.log(time);

// // for (const [min, event] of gameEvents) {
// //   const half = min <= 45 ? 'First ' : 'Second';
// //   console.log(`[Half] ${min}:${event}`);
// // }

// /////Strings Start
// // const airline = 'Tap Air Portugal';
// // const plane = 'a20Q';
// // console.log(plane[0]);
// // console.log(airline.length);
// // console.log(airline.indexOf('r'));
// // console.log(airline.lastIndexOf('r'));
// // console.log(airline.indexOf('Air'));

// // console.log(airline.slice(5));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(' ')));

// // console.log(airline.slice(1, -2));

// // const checkMiddleSeat = function (seat) {
// //   const s = seat.slice(-1);
// //   if (s === 'B' || s === 'E') console.log('You got middle seat');
// //   else console.log('Lucky');
// // };

// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');

// // console.log(airline.toLowerCase());

// // //Fix Capitalization
// // const passenger = 'joNaS';
// // const passengerLower = passenger.toLowerCase();
// // const passengerCorrect =
// //   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// // console.log(passengerCorrect);

// //Comparing emails
// // const email = 'hello@faiz.in';
// // const loginEmail = '    Hello@Faiz.in';
// // const lowerEmail = loginEmail.toLowerCase();
// // console.log(lowerEmail);
// // const trimmedEmail = lowerEmail.trim(); //Trim white space
// // console.log(trimmedEmail);

// // console.log(email === trimmedEmail);

// // //Replacing
// // const priceUs = '288,97$';
// // const priceEuro = priceUs.replace('$', '&').replace(',', '.');
// // console.log(priceEuro);

// // const announcement = 'All passengers gate come to gate';
// // console.log(announcement.replace('gate', 'door'));
// // console.log(announcement.replaceAll('gate', 'door'));
// // console.log(announcement.replaceAll(/gate/g, 'door'));

// // //Booleans
// // const planex = 'airbus a32yz';
// // console.log(planex.includes('a32'));
// // console.log(planex.includes('A32'));

// // if (planex.startsWith('airbus') && planex.endsWith('z')) {
// //   console.log('yooooo');
// // }

// // //spilit String
// // console.log('a+bnxbjsdn+bnxsjbjsdbn'.split('+'));
// // console.log('Faizan ahmad'.split(' '));

// // const [first, last] = 'Faizan Ahmad'.split(' ');
// // const newName = ['Mr ', first, last.toUpperCase()].join(' ');
// // console.log(newName);

// // //Padding
// // const message = 'Go to gate 23';
// // console.log(message.padStart(25, '+').padEnd(35, '-'));
// // console.log(message.padEnd(25, '+'));

// //Example
// // const maskingCreditCard = function (number) {
// //   const str = number + '';
// //   const last = str.slice(-4);
// //   return last.padStart(str.length, '*');
// // };

// // console.log(maskingCreditCard(433526717987129));
// // console.log(maskingCreditCard('433526717987129'));

// // //Repeat
// // const message2 = 'Bad weather ....All Late';
// // console.log(message2.repeat(5));

// // const planesInLine = function (n) {
// //   console.log(`there are ${n} planes in line ${'see'.repeat(n)}`);
// // };
// // planesInLine(5);

// //Challenge last of this section
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const row of rows) {
//     console.log(row);
//     const [first, second] = row.toLowerCase().trim().split('_');
//     console.log('=====' + row, first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });
