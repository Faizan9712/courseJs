'use strict';

///Object Oriented programming
//Constructor function
const Person = function (firstname, birthYear) {
  // console.log(this);
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
  // console.log(firstname, birthYear);

  // //Dont do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

//Creating Object
const myObj = new Person('Faizan', 1998);
console.log(myObj);

const myObj1 = new Person('Jack', 2000);
console.log(myObj1);

const xyz = '';

console.log(myObj instanceof Person);
console.log(xyz instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

myObj.calcAge();
myObj1.calcAge();
console.log('=========1========');
console.log(myObj.__proto__);
console.log(myObj.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(myObj));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(myObj.species, myObj1.species);

console.log(myObj.hasOwnProperty('species'), myObj.hasOwnProperty('firstname'));

//Prototypal Inheritance
console.log('=========2=========');
console.log(myObj.__proto__.__proto__); //OBJECT prototype
console.log(myObj.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

//Checking for an Array
console.log('=========3=========');
const arr = [3, 1, 3, 6, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((h1.style.color = 'red'));

// //Challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   console.log(this);
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going with speed ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`${this.make} is going with speed ${this.speed}`);
// };

// const BMW = new Car('BMW', 120);
// const Mercedies = new Car('Mercedies', 95);
// BMW.accelerate();
// Mercedies.accelerate();

//ES6 Classes
//Class expression
//const PersonCl = class{}

//Class declaration
console.log('=========4=========');
class PersonCl {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  //Set a property that already exists
  set fullname(name) {
    console.log(name);
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name`);
  }

  get fullname() {
    return this._fullname;
  }

  static hey() {
    console.log('Hii Static=========');
  }
}

const jessica = new PersonCl('jessica davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullname);
// console.log(jessica.hey()); //undefined
console.log(PersonCl.hey());

console.log('=========5=========');
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullname}`);
};
jessica.greet();

console.log(jessica.__proto__ === PersonCl.__proto__);
console.log(jessica.__proto__ === PersonCl.prototype);

//1. Class are not hoisted
//2. Class are first-class citizens
//33. Classes are exectued in strict mode

//Getters and Setters
const account = {
  owner: 'Faizan',
  movements: [200, 500, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log('=========6=========');
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

///Static Methods
Person.hey = function () {
  console.log('Hey person There');
};

Person.hey();

//Object creation
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'steven';
steven.birthYear = 1899;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('sarah', 1991);
sarah.calcAge();

// Challenge 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going with speed ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 10;
//     console.log(`${this.make} is going with speed ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

//Inheritance b/w classes constructor fxns
const Person1 = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstname, birthYear, course) {
  Person.call(this, firstname, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstname} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer');
mike.introduce();
mike.calcAge();
console.log('===========');
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//Challenge 3
// const Car1 = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car1.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going with speed ${this.speed}`);
// };

// Car1.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`${this.make} is going with speed ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car1.call(this, make, speed);
//   this.charge = charge;
// };

// //Link Prototypes
// EV.prototype = Object.create(Car1.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// //Overiden method
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going with speed ${this.speed} with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();

// console.log('===========');
// console.log(tesla.__proto__);
// console.log(tesla.__proto__.__proto__);

// console.log(tesla instanceof Car1);
// console.log(tesla instanceof EV);
// console.log(tesla instanceof Object);

// EV.prototype.constructor = EV;
// console.dir(EV.prototype.constructor);

class Student1 extends PersonCl {
  constructor(fullname, birthYear, course) {
    super(fullname, birthYear); //Always first
    this.course = course;
  }

  introduce() {
    console.log(`My Name is ${this.fullname} and I study ${this.course} `);
  }

  //Overided
  calcAge() {
    console.log(`I am ${2022 - this.birthYear} years old`);
  }
}
const martha = new Student1('Martha Jonas', 1999, 'CS');
martha.introduce();

martha.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstname, birthYear, course) {
  PersonProto.init.call(this, firstname, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My Name is ${this.firstname} and I study ${this.course} `);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
jay.calcAge();

console.log('=========7=========');
console.log('=========Class example=========');

//Public Fields
//Public Fields
//Public Methods
//Public Methods
//Static Version

class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //To make movements protected use underscore before
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ,${owner}`);
  }

  //Public interface and methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // console.log(`you deposited ${val}`);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    // console.log(`you withdrawed ${val}`);
    return this;
  }

  _approveLoan(val) {
    if (val > 500) return true;
    return false;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    } else console.log('Cannot approve loan');
    return this;
  }

  static helper() {
    console.log('I am helper');
  }
  //Private Methods valid but not supported by browsers
  #approveLoan(val) {
    if (val > 500) return true;
    return false;
  }
}

const acc1 = new Account('Jonas', 'Eur', 1111);
// console.log(acc1);

//manual
// acc1.#movements.push(-140); //Cannot change as it is private

//encapsulate
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(600);
// acc1._approveLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1.#pin);//Private
console.log(acc1);
Account.helper(); //No need to create object we can access them using Class name

//Chaining Methods
acc1.deposit(300).deposit(500).deposit(35).requestLoan(2500).withdraw(122);
console.log(acc1.getMovements());

//Challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going with speed ${this.speed}`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going with speed ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBatttery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    console.log(
      `${this.make} is going with speed ${this.speed} with charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const ford = new EVCl('Figo', 120, 23);
console.log(ford);
ford.accelerate().accelerate().brake().chargeBatttery(50).accelerate();
console.log(ford.speedUS);
