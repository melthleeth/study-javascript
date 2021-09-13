const scores = [10, 30, 15, 25, 50, 40, 5];
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// Filter

const filteredScores = scores.filter((score) => {
  return score > 20;
});
console.log(filteredScores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

// Map: make array

const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30)
    return { name: product.name, price: product.price / 2 };
  else return product;
});
console.log(saleProducts);

// Reduce
const scores2 = [10, 20, 60, 40, 70, 90, 30];
const result = scores2.reduce((acc, curr) => {
  if (curr > 50) acc++;
  return acc;
}, 0);
console.log(result);

const scores3 = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 20 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 80 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 90 },
  { player: "crystal", score: 60 },
];

const marioTotal = scores3.reduce((acc, curr) => {
  if (curr.player === "mario") acc += curr.score;
  return acc;
}, 0);

console.log(marioTotal);

// Find
const scores4 = [10, 5, 0, 40, 60, 10, 20, 70];
const firstHighScore = scores4.find((score) => score > 50);
console.log(firstHighScore);

// Sort
const names = ["mario", "shaun", "meredith", "chun-li", "yoshi", "luigi"];
names.sort();
names.reverse();
console.log(names);

const scores5 = scores4.sort((a, b) => a - b);
console.log(scores5);

const players = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "luigi", score: 70 },
  { player: "crystal", score: 60 },
  { player: "yoshi", score: 80 },
];

players.sort((a, b) => b.score - a.score);
// players.sort((a, b) => {
//   if (a.score > b.score) return -1;
//   else if (b.score > a.score) return 1;
//   else return 0;
// });
console.log(players);

// Chaining Array

// const filtered = products.filter((product) => product.price > 20);
// const promos = filtered.map(
//   (product) => `the ${product.name} is ${product.price / 2} pounds`
// );

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos);
