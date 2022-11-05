'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd'];

//Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// //Splice //It slices the elements adnd delets from them original arrray
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

// console.log(arr.splice(1, 2));
// console.log(arr);

// //Reverse
// arr = ['a', 'b', 'c', 'd'];
// const arr2 = ['j', 'i', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);

// //Join
// console.log(letters.join('-'));

//////////////////////////////////////////
////Loops
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }
// //Same by forEach
// console.log('-------For Each-------');
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: ${Math.abs(movement)}`);
//   }
// }

// console.log('-------For Each-------');
// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: ${Math.abs(movement)}`);
//   }
// });

///Loops with maps and sets

//Map////
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} :${value}`);
// });

// //Set
// const currenciesUnique = new Set(['usd', 'usd', 'euro']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (key, value) {
//   console.log(`${key} : ${value}`);
// });

///Creating dom elements
//In project
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type
        movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

//Challenge
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   console.log(dogsJuliaCorrected);
//   dogsJuliaCorrected.splice(0, 1);
//   console.log(dogsJuliaCorrected);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog > 2) {
//       console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is puppy and is ${dog} years old`);
//     }
//   });
// };
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia, dogsKate);

///Data transformations Map,Filter,Reduce
/////Map
// const eurToUsd = 1.1;
// const movUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movUsd);

// //Same by arrow
// const movByArrow = movements.map(mov => mov * eurToUsd);
// console.log(movByArrow);

// ///Same using for
// const movUsdFor = [];
// for (const mov of movements) {
//   movUsdFor.push(mov * eurToUsd);
// }
// console.log(movUsdFor);

// const movDescrip = movements.map((mov, index) => {
//   if (mov > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${mov}`);
//     return `Movement ${index + 1}: You deposited ${mov}`;
//   } else {
//     console.log(`Movement ${index + 1}:tou withdraw ${Math.abs(mov)}`);
//     return `Movement ${index + 1}:tou withdraw ${Math.abs(mov)}`;
//   }
// });

// console.log(movDescrip);

// const user = 'Steven Thomas Williams';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');

//In project
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);
// console.log(createUsernames('Sarah Smith'));

//Filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// ///Same using for
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }

// console.log(depositsFor);

///Reduce
//Accumulator is snowball
// const balance = movements.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i} :${acc}`);
//   return acc + cur;
// }, 0); //0 is the initial value of accumlator
// console.log(movements);
// console.log(balance);

// //Same using arrow fxn
// const bal = movements.reduce((acc, cur, i) => acc + cur, 0);
// console.log(bal);

// //Same using for of

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
//In project
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
console.log(calDisplayBalance(account1));

// //Max value
// const max = movements.reduce((acc, mov) => {
//   console.log(acc + ' ' + mov);
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

//Challenge
// const calAvHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age / adults.length, 0);
//   return average;
// };
// console.log(calAvHumanAge([5, 2, 4, 1, 15, 8, 3]));

//Magic of chaining methods
const eurToUsd = 1.1;
//Pipeline
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUsd);

//In project
const calcDisplaySummary = function (acc) {
  console.log(acc.movements);
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}E`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}E`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}E`;
};

calcDisplaySummary(account1);

///Challenge
// const calAvHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age / adults.length, 0);
//   return average;
// };
// console.log(calAvHumanAge([5, 2, 4, 1, 15, 8, 3]));

///Or
// const calAvHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calAvHumanAge([5, 2, 4, 1, 15, 8, 3]));

////The find method
// //finds the first element that matches our condition
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// //example
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///Implemting login
//Event Handler
//Display Movements
const updateUI = function (acc) {
  displayMovements(currentAccount.movements);

  //Display Balance
  calDisplayBalance(currentAccount);

  //Display Summary
  calcDisplaySummary(currentAccount);
};

let currentAccount;
//In project

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  // console.log('Login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //After login display UI and message
    console.log('Logged in');
    labelWelcome.textContent = `Welcome Back , ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
  }
  //Clearing input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  updateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid');
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

///some and every mathod
console.log(movements);
console.log(movements.includes(-130)); //Checks eqality

const anyDeposits = movements.some(mov => mov > 0); //checks conditions
console.log(anyDeposits);

//every only returns true if all members satisfies cond
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//seperate call back
console.log('==========');
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat());

const arrDeep = [[[1, 2, 3], [4, 5, 6], 7, 8], 9];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

//Or
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

///Sorting arrays
const owners = ['jonas', 'Martgha', 'Hedge'];
console.log(owners.sort());

console.log(movements);
console.log(movements.sort()); //Not for negative numbers

movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(movements);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('sort');
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///New ways
console.log([1, 2, 3, 4, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5, 6, 78));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
//Fill
x.fill(1);
console.log(x);

x.fill(2, 3);
console.log(x);

x.fill(2, 3, 4);
console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

const movmentsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movmentsUI);

labelBalance.addEventListener('click', function () {
  const movmentsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('E', '')
  );
});
console.log(movmentsUI);
const movementsUI2 = [...document.querySelectorAll('.movements__value')];

//Last challenge
console.log('==============');
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 8, curFood: 200, owners: ['Sarah', 'John'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
