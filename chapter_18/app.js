// rest parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 6, 7, 8, 2, 4, 6, 7);
console.log(result);

// spread syntax (arrays)
const people = ["shaun", "ryu", "crystal"];
const members = ["mario", "chun-li", ...people];
console.log(...people);
console.log(members);

// spread syntax (objects)
const person = { name: "shaun", age: 30, job: "net ninja" };
const personClone = { ...person, location: "manchester" };

console.log(personClone);

// sets
const namesArray = ["shaun", "ryu", "crystal", "ryu"];
// console.log(namesArray);

const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "shaun", age: 30 },
  { name: "crystal", age: 29 },
  { name: "chun-li", age: 32 },
]);

ninjas.forEach((ninja) => console.log(ninja.name, ninja.age));

const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

// symbol은 object의 unique한 key로 사용될 수 있다
const ninja = {};
ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";
ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "shaun";

console.log(ninja);
