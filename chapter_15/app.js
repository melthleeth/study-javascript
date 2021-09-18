// array를 만드는 방법
// 1. []
const names = ["shaun", "crystal"];

// 2. Array constructor
const ages = new Array(20, 25, 30);

// => object 형태로 만드는게 좋다

// const userOne = {
//   username: "ryu",
//   email: "ryu@thenetninja.co.uk",

//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// class type은 없지만 prototype model로 흉내내는 것

class User {
  constructor(username, email) {
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }

  addUser(user) {
    users.push(user);
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin(
  "meredith",
  "meredith@thenetninja.co.uk",
  "black-belt-ninja"
);

// userOne.login();
// userOne.logout();
// userOne.incScore();

// return this 를 하면 chaining 가능
// userTwo.login().incScore().incScore().logout();

/* 
the 'new' keyword
1. It creates a new empty object {}
2. It binds the value of 'this' to the new empty object
3. it calls the constructor function to 'build' the object

*/

console.log(userOne, userTwo, userThree);
let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
userThree.addUser(userTwo);
console.log(users);

// class를 안쓰고 한다면?
function User2(username, email) {
  this.username = username;
  this.email = email;
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}

const userFour = new User2("shaun", "shaun@thenetninja.co.uk");
console.log(userFour);
// userFour.login();

/* 
prototype은 무엇인가?
- JavaScript의 모든 object는 prototype이 있다.
- prototypes contain all the methods for that object type

array에 directly store 되지 않고 prototype에 저장된다.

*/

// 요런식으로 추가할 수도 있다.
User2.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User2.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};
userFour.login();
userFour.logout();

userFour.login().logout();

//  prototypal inheritance
function Admin2(username, email, title) {
  User2.call(this, username, email);
  this.title = title;
}

Admin2.prototype = Object.create(User2.prototype); // 이런식으로 inheritance 추가해줘야함!
Admin2.prototype.deleteUser = function () {};

const userFive = new Admin2(
  "maggie",
  "maggie@thenetninja.co.uk",
  "black-belt-ninja"
);

console.log(userFive);

// 모든 object는 Object를 inherit하고 있다
